import { createServer } from 'http';
import app from './app.js';

//const hostname = '127.0.0.1'; 
const port = process.env.PORT || 3000;

//App.js contains the code to process the http request and send the response
const server = createServer(app);

server.listen(port, () => { 
    console.log(`Server running at ${port}`); 
});
