let suma = 0;

console.time("todo");
console.time("bucle");

for (let i = 0; i < 1000000000; i++) {
  suma += i;
}

console.timeEnd("bucle");

// console.log(suma);

let suma2 = 0;

console.time("bucle2");

for (let j = 0; j < 100000000; j++) {
  suma2 += j;
}

console.timeEnd("bucle2");

// console.log(suma2);

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}

console.time("asincrono");
console.log("Empieza el proceso asincrono");
asincrona().then(() => {
  console.timeEnd("asincrono");
});

console.timeEnd("todo");
