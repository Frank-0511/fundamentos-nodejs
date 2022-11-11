console.log("Hola mundo");
console.error("Hola mundo");
console.warn("Hola mundo");
console.info("Hola mundo");

var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra",
  },
];

console.table(tabla);

console.group("Conversación");
console.log("Hola");
console.log("bla bla bla");
console.group("bla");
console.log("bla bla bla");
console.log("bla bla bla");
console.log("bla bla bla");
console.groupEnd("bla");
console.log("bla bla bla");
console.log("Adios");
console.groupEnd("Conversación");

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
