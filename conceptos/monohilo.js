console.log("Hola mundo");

/*
setInterval(() => {
  console.log("Sigo activo");
}, 1000);
*/

let i = 0;
setInterval(() => {
  console.log(i);
  i++;
  if (i === 5) {
    console.log("forzamos error");
    var a = 3 + z;
  }
}, 1000);

console.log("Segundo mensaje");
