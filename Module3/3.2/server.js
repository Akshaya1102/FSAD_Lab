import { createServer } from 'http';

const server = createServer((req, res) => {
 // res.setHeader('Access-Control-Allow-Origin', '*');  
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  //res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello from Server with CORS enabled!" }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(4000, () => {
  console.log('API server with CORS running at http://localhost:4000');
});
