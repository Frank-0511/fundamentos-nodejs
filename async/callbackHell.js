function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log(`Hola, ${nombre}`);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 500);
}

function conversación(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversación(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
}

/*
console.log("Iniciando proceso...");
hola("Frank", function (nombre) {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        adios(nombre, function () {
          console.log("Terminando proceso...");
        });
      });
    });
  });
});
*/

console.log("Iniciando proceso...");
hola("Frank", function (nombre) {
  conversación(nombre, 3, function () {
    console.log("Proceso terminado");
  });
});
