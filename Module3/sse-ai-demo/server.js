const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// Store active SSE connections
const clients = new Map();

// Serve the simple frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// SSE endpoint - client connects here to receive streaming data
app.get('/stream/:sessionId', (req, res) => {
    const sessionId = req.params.sessionId;

    // Set SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Send connection confirmation
    res.write(`data: ${JSON.stringify({ type: 'connected', sessionId })}\n\n`);

    // Store client connection
    clients.set(sessionId, res);
    console.log(`Client connected: ${sessionId}`);

    // Cleanup on disconnect
    req.on('close', () => {
        clients.delete(sessionId);
        console.log(`Client disconnected: ${sessionId}`);
    });
});

// Chat endpoint - receives prompt and streams response via SSE
app.post('/chat', async (req, res) => {
    const { sessionId, prompt } = req.body;

    const client = clients.get(sessionId);
    if (!client) {
        return res.status(400).json({ error: 'No SSE connection found' });
    }

    res.json({ status: 'streaming' });

    // Generate and stream response
    await streamResponse(client, prompt);
});

// Simple AI response generator (simulates token streaming)
async function streamResponse(client, prompt) {
    const response = generateResponse(prompt);
    const tokens = tokenize(response);

    // Send start event
    client.write(`data: ${JSON.stringify({ type: 'start' })}\n\n`);

    // Stream each token with delay
    for (const token of tokens) {
        await delay(30 + Math.random() * 40);
        client.write(`data: ${JSON.stringify({ type: 'token', text: token })}\n\n`);
    }

    // Send complete event
    client.write(`data: ${JSON.stringify({ type: 'complete' })}\n\n`);
}

// Generate response based on prompt
function generateResponse(prompt) {
    const lower = prompt.toLowerCase();

    if (lower.includes('hello') || lower.includes('hi')) {
        return "Hello! I'm a simple AI demo using Server-Sent Events (SSE) for streaming. Each word you see is being sent as a separate event from the server to your browser. Try asking me about SSE or how this works!";
    }

    if (lower.includes('sse') || lower.includes('server-sent')) {
        return "Server-Sent Events (SSE) is a simple way to stream data from server to client:\n\n1. Client opens connection with EventSource\n2. Server sends events using text/event-stream format\n3. Each event is: data: {json}\\n\\n\n4. Browser auto-reconnects if connection drops\n\nIt's perfect for AI streaming because responses only flow one direction!";
    }

    if (lower.includes('how') && lower.includes('work')) {
        return "Here's how this demo works:\n\n1. Your browser connects to /stream endpoint via EventSource\n2. When you send a message, it goes to /chat via POST\n3. Server generates a response and splits it into tokens\n4. Each token is sent as an SSE event with a small delay\n5. Your browser receives tokens and displays them in real-time\n\nNo WebSockets needed - just plain HTTP!";
    }

    if (lower.includes('code') || lower.includes('example')) {
        return "Here's the core SSE code:\n\n```javascript\n// Server\napp.get('/stream', (req, res) => {\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.write(`data: {\"msg\": \"hello\"}\\n\\n`);\n});\n\n// Client\nconst es = new EventSource('/stream');\nes.onmessage = (e) => console.log(e.data);\n```\n\nThat's it! Simple and effective.";
    }

    return `You said: "${prompt}"\n\nThis is a streaming response demo. Each word streams individually to create the typing effect you see in AI chat interfaces.\n\nTry asking:\n- How does this work?\n- What is SSE?\n- Show me code`;
}

// Split text into tokens (words + punctuation)
function tokenize(text) {
    const tokens = [];
    let word = '';

    for (const char of text) {
        if (char === ' ' || char === '\n') {
            if (word) tokens.push(word);
            tokens.push(char);
            word = '';
        } else if ('.,!?;:()[]{}"-\'`'.includes(char)) {
            if (word) tokens.push(word);
            tokens.push(char);
            word = '';
        } else {
            word += char;
        }
    }
    if (word) tokens.push(word);

    return tokens;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.listen(PORT, () => {
    console.log(`\nSimple SSE Demo running at http://localhost:${PORT}\n`);
});
