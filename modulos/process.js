// const process = require("process");

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("El proceso ha terminado");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 0);
});

process.on("uncaughtException", (err, origen) => {
  console.error("Vaya se nos ha olvidado capturar un error");
  setTimeout(() => {
    console.log("Esto viene desde las excepciones");
  }, 0);
  console.error("origen", origen);
  console.error(err);
});

setTimeout(() => {
  console.log("Esto si se va a ver");
}, 0);

funciónQueNoExiste();

console.log("Esto si el error no se recoje, no sale");
