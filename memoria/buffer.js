let buffer = Buffer.alloc(4);
let buffer2 = Buffer.from([1, 2, 5]);
let buffer3 = Buffer.from("Hola");

console.log(buffer);
console.log(buffer2);
console.log(buffer3);

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());
