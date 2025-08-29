import { createServer } from 'http';
const server = createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a GET response');
  } else if (req.method === 'POST') {
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.end('This is a POST response');
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

