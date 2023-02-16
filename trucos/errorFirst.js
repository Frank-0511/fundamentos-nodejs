function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  });
}

asincrona(function (err, dato) {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;
  }
  console.log(dato);
});
