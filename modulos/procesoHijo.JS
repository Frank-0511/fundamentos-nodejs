const { exec, spawn } = require("child_process");

/* exec("cd .. && ls -la", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
}); */

/* exec("node ../modulos/consola.js", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
}); */

let proceso = spawn("ls", ["-la"]);

// console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
  console.log("¿Está muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("El proceso terminó");
  console.log(proceso.killed);
});
