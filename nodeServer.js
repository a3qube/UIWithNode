require("http");

let server = http.createServer(function(req,res){
    req.writeHead(200,{'Content-type':"text-plain"});
    res.end("Welcome to the Node Server");
});

server.listen(1234,function(){
    console.log("NODE server initiated");
});
