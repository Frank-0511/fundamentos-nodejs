/*
function soyAsíncrona(callback) {
  // console.log("Hola soy una función asíncrona");
  setTimeout(function () {
    console.log("Estoy siendo asíncrona");
    callback();
  }, 1000);
}

console.log("Iniciando proceso...");
soyAsíncrona(function () {
  console.log("Terminando proceso...");
});
*/

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log(`Hola, ${nombre}`);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
hola("Frank", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
});
