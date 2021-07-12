let fs = require("fs")



let http = require("http")

let server = http.createServer(function(req, res) {
    console.log("url страниццы: " + req.url)
    if(req.url === "/index" || req.url === "/"){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    fs.createReadStream(__dirname + "/in.html", "utf8").pipe(res)
    } else if (req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        fs.createReadStream(__dirname + "/about.html", "utf8").pipe(res)
    } else{
        res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"})
        fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res)
    }
}).listen(3000, "127.0.0.1")

console.log("start localhost:3000")