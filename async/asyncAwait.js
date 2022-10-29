const hola = async (nombre) => {
  console.log(`Hola, ${nombre}`);
};

const hablar = async () => {
  console.log("Bla bla bla bla...");
};

const adios = async (nombre) => {
  console.log(`Adios, ${nombre}`);
};

const main = async () => {
  const nombre = "Frank";
  await hola(nombre);
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminando proceso...");
};
console.log("Iniciando proceso...");
main();
