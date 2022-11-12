function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asíncrona");
      cb(err);
    }
  });
}

try {
  // serompe();
  // otraFuncion();
  seRompeAsincrona(function (err) {
    console.log(err);
    console.log(err.message);
    console.log(err.name);
    console.log(err instanceof TypeError);
    console.log(err instanceof ReferenceError);
  });
} catch (err) {
  console.error(err);
  console.log(err.message);
  console.log(err.name);
  console.log(err instanceof TypeError);
  console.log(err instanceof ReferenceError);
}
