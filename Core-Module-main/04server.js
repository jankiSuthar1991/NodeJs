const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    res.end("Hello From the server");
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Lestening to server from port 8000');
});