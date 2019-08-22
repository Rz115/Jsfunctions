var http = require("http");

function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Testing");
  response.end();
}

http.createServer(onRequest).listen(1024);

console.log("Servidor Iniciado.");