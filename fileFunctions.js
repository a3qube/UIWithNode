let fileObj = require("fs")
let http = require("http");



http.createServer(
    function(req,res){
        fileObj.readFile('HTMLfiles/welcome.html', function (err, data) {
            doToData(data, res);
        });
    }
).listen(4321);

function doToData(data,res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
}
