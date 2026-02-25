const http = require('http');

// Simulated orders - as if customers are paying on the payment provider's website
const orders = [
    {
        order_id: "PIZZA-001",
        customer: "Ada Lovelace",
        pizza: "Margherita",
        extras: ["Extra Cheese", "Garlic Bread"],
        amount: 22.50
    },
    {
        order_id: "PIZZA-002",
        customer: "Alan Turing",
        pizza: "Pepperoni",
        extras: ["Coke"],
        amount: 18.00
    },
    {
        order_id: "PIZZA-003",
        customer: "Grace Hopper",
        pizza: "Veggie Supreme",
        extras: ["Buffalo Wings", "Sprite"],
        amount: 28.75
    }
];

// Function to send a webhook (simulating the payment provider)
function sendPaymentWebhook(orderData) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(orderData);

        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/webhook/order-paid',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                'X-Webhook-Source': 'PaymentProvider',
                'X-Webhook-Event': 'payment.success'
            }
        };

        console.log(`\n💳 [PAYMENT PROVIDER] Processing payment for ${orderData.customer}...`);
        console.log(`   Order: ${orderData.pizza} - $${orderData.amount}`);

        const req = http.request(options, (res) => {
            let responseData = '';
            res.on('data', chunk => responseData += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    console.log(`✅ [PAYMENT PROVIDER] Webhook delivered successfully!`);
                    console.log(`   Pizza shop responded: ${responseData}`);
                    resolve(responseData);
                } else {
                    console.log(`⚠️  [PAYMENT PROVIDER] Webhook delivery failed: ${res.statusCode}`);
                    reject(new Error(`Status: ${res.statusCode}`));
                }
            });
        });

        req.on('error', (error) => {
            console.error(`❌ [PAYMENT PROVIDER] Error sending webhook: ${error.message}`);
            console.error('   Make sure the pizza shop server is running! (node server.js)');
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

// Simulate payments happening one after another
async function simulatePayments() {
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('  💳 PAYMENT PROVIDER SIMULATOR (like Stripe/PayPal)');
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('  This simulates what happens when customers pay online.');
    console.log('  Each successful payment triggers a webhook to the pizza shop.');
    console.log('───────────────────────────────────────────────────────────────\n');

    for (let i = 0; i < orders.length; i++) {
        try {
            await sendPaymentWebhook(orders[i]);
            // Wait 2 seconds between orders to see the effect
            if (i < orders.length - 1) {
                console.log('\n   ⏳ Next payment coming in 20 seconds...\n');
                await new Promise(resolve => setTimeout(resolve, 20000));
            }
        } catch (error) {
            console.error(`   Failed to process order ${orders[i].order_id}`);
        }
    }

    console.log('\n═══════════════════════════════════════════════════════════════');
    console.log('  ✅ All payments processed! Check the pizza shop server.');
    console.log('═══════════════════════════════════════════════════════════════\n');
}

// Run the simulation
simulatePayments();
