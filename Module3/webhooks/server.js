const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Store connected SSE clients
let clients = [];

// Store received orders
const receivedOrders = [];

// Middleware to parse JSON
app.use(express.json());

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// SSE endpoint - clients connect here for real-time updates
app.get('/events', (req, res) => {
    // Set headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Add this client to the list
    clients.push(res);
    console.log(`Client connected. Total clients: ${clients.length}`);

    // Remove client when they disconnect
    req.on('close', () => {
        clients = clients.filter(client => client !== res);
        console.log(`Client disconnected. Total clients: ${clients.length}`);
    });
});

// Function to send order to all connected clients
function broadcastOrder(order) {
    clients.forEach(client => {
        client.write(`data: ${JSON.stringify(order)}\n\n`);
    });
}

// Webhook Endpoint - Payment provider POSTs here when payment succeeds
app.post('/webhook/order-paid', (req, res) => {
    const orderData = req.body;

    console.log(`\nWebhook received: Order ${orderData.order_id} from ${orderData.customer}`);

    // Validate the webhook payload
    if (!orderData.order_id || !orderData.customer || !orderData.pizza) {
        console.log('Invalid webhook payload');
        return res.status(400).send('Invalid payload');
    }

    // Store the order
    receivedOrders.push({
        ...orderData,
        received_at: new Date().toISOString()
    });

    // Broadcast to all connected web clients (this updates the HTML page!)
    broadcastOrder(orderData);

    console.log(`Order sent to ${clients.length} connected client(s)`);

    // Respond to payment provider
    res.status(200).json({
        status: 'received',
        message: 'Order sent to kitchen!',
        order_id: orderData.order_id
    });
});

// API to get all orders
app.get('/orders', (req, res) => {
    res.json({
        total_orders: receivedOrders.length,
        orders: receivedOrders
    });
});

app.listen(PORT, () => {
    console.log('\n🍕 Mario\'s Pizza Kitchen Server');
    console.log('═══════════════════════════════════════════');
    console.log(`View orders at:    http://localhost:${PORT}`);
    console.log(`Webhook endpoint:  http://localhost:${PORT}/webhook/order-paid`);
    console.log('═══════════════════════════════════════════');
    console.log('Open the browser and run event.js to see orders appear!\n');
});
