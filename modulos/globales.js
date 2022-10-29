let i = 0;
let intervalo = setInterval(() => {
  console.log("Hola");
  i++;
  if (i === 3) {
    clearInterval(intervalo);
  }
}, 1000);

setImmediate(function () {
  console.log("Hola setImmediate");
});

console.log(__dirname);
console.log(__filename);

global.miVariable = "El valor de mi variable";
console.log(miVariable);
