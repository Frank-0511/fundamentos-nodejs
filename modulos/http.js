const http = require("http");

http
  .createServer((req, res) => {
    console.log("Nueva petición!");
    console.log(req.url);

    switch (req.url) {
      case "/hola":
        res.write("Hola, que tal");
        res.end();
        break;
      default:
        res.write("Error 404: No sé lo que quieres");
        res.end();
    }

    // res.writeHead(201, { "Content-Type": "text/plain" });

    // // Escribir una respuesta al usuario
    // res.write("Hola, ya se usar HTTP de NodeJS");

    // res.end();
  })
  .listen(3000);

console.log("Escuchando http en el puerto 3000");
