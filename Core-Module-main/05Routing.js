const http = require('http');
const url = require('url');


//first example
// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end("Hello From the server");
// });
// server.listen(8001,'127.0.0.1',()=>{
//     console.log('Lestening to server from port 8000');
// });



//second example
const server = http.createServer((req,res)=>{
   const patName = req.url;
   if(patName === '/' || patName === '/overview')
   {
    res.end("This is an overview");
   } 
   else if(patName === '/product' )
   {
    res.end("This is product");
   }
   else{
    res.writeHead(404);
    res.end("Page not Found");
   }
});
server.listen(8001,'127.0.0.1',()=>{
    console.log('Lestening to server from port 8000');
});