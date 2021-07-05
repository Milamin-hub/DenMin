const http = require("http");
const os = require("os");
const greet = require("./greet")
let userName = os.userInfo().username
http.createServer(function(request, response){
    response.end(`Welcome: ${userName}`);

}).listen(3000, "127.0.0.1", function(){
    console.log(`start server localhost:3000,${greet.date}`);
});

