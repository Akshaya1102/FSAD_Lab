const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const HTTP_PORT = 3000;  // Frontend
const WS_PORT = 4000;    // WebSocket server

// Create HTTP server to serve the frontend
const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Create WebSocket server on separate port
const wss = new WebSocket.Server({ port: WS_PORT });

// Track connected clients
let clientCount = 0;

wss.on('connection', (ws) => {
    clientCount++;
    const clientId = clientCount;
    console.log(`Client ${clientId} connected. Total clients: ${wss.clients.size}`);

    // Send welcome message to the newly connected client
    ws.send(JSON.stringify({
        type: 'welcome',
        message: `Welcome! You are client #${clientId}`,
        clientId: clientId,
        timestamp: new Date().toISOString()
    }));

    // Broadcast to all other clients that a new user joined
    wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'notification',
                message: `Client #${clientId} has joined the chat`,
                timestamp: new Date().toISOString()
            }));
        }
    });

    // Handle incoming messages from client
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            console.log(`Received from client ${clientId}:`, message);

            // Handle different message types
            switch (message.type) {
                case 'chat':
                    // Broadcast chat message to all clients
                    const chatResponse = JSON.stringify({
                        type: 'chat',
                        clientId: clientId,
                        message: message.content,
                        timestamp: new Date().toISOString()
                    });
                    wss.clients.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(chatResponse);
                        }
                    });
                    break;

                case 'ping':
                    // Respond with pong (demonstrates request-response pattern)
                    ws.send(JSON.stringify({
                        type: 'pong',
                        message: 'Server received your ping!',
                        serverTime: new Date().toISOString()
                    }));
                    break;

                case 'echo':
                    // Echo the message back (demonstrates bidirectional communication)
                    ws.send(JSON.stringify({
                        type: 'echo',
                        original: message.content,
                        echoed: message.content.split('').reverse().join(''),
                        timestamp: new Date().toISOString()
                    }));
                    break;

                default:
                    ws.send(JSON.stringify({
                        type: 'error',
                        message: 'Unknown message type'
                    }));
            }
        } catch (error) {
            console.error('Error parsing message:', error);
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Invalid JSON format'
            }));
        }
    });

    // Handle client disconnect
    ws.on('close', () => {
        console.log(`Client ${clientId} disconnected`);

        // Notify other clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: 'notification',
                    message: `Client #${clientId} has left the chat`,
                    timestamp: new Date().toISOString()
                }));
            }
        });
    });

    // Handle errors
    ws.on('error', (error) => {
        console.error(`WebSocket error for client ${clientId}:`, error);
    });
});

// Server-initiated messages (demonstrates server push)
setInterval(() => {
    if (wss.clients.size > 0) {
        const serverMessage = JSON.stringify({
            type: 'server-broadcast',
            message: 'Server heartbeat',
            connectedClients: wss.clients.size,
            timestamp: new Date().toISOString()
        });

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(serverMessage);
            }
        });
    }
}, 30000); // Every 30 seconds

server.listen(HTTP_PORT, () => {
    console.log(`Frontend running at http://localhost:${HTTP_PORT}`);
    console.log(`WebSocket server ready on ws://localhost:${WS_PORT}`);
});
