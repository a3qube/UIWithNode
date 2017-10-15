let http = require("http");

let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':"text-plain"});
    res.end("Welcome to the Node Server: Server is in place now");
});

server.listen(1234,function(){
    console.log("NODE server initiated");
});
