import { createSecureServer } from 'http2';
import { generate } from 'selfsigned';

// Generate self-signed certificate
const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = generate(attrs, { days: 365 });

// Create secure HTTP/2 server
const server = createSecureServer({
  key: pems.private,
  cert: pems.cert
});

// Handle requests
server.on('stream', (stream, headers) => {
  stream.respond({ 'content-type': 'text/html', ':status': 200 });
  stream.end('<h1>Hello from HTTP/2!</h1>');
});

server.listen(8443, () => {
  console.log('HTTP/2 server running at https://localhost:8443');
});
