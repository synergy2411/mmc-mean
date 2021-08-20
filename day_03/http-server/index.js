const http = require("http");

const server = http.createServer((request, response)=>{
    console.log("Method : ", request.method);
    console.log("URL : ", request.url)
    console.log("Headers : ", request.headers);
    response.write("Hello Client");
    response.end();
})

server.listen(9090)

console.log("Server started at PORT : 9090")