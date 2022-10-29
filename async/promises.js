function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      resolve(nombre);
    }, 500);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${nombre}`);
      // resolve();
      reject("Error en adios");
    }, 1000);
  });
}

console.log("Iniciando proceso...");
hola("Frank")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log("Terminando proceso...");
  })
  .catch((error) => {
    console.error("Ha habido un error:");
    console.error(error);
  });
