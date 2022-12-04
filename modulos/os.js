const os = require("os");

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

function memoryForTypeBytes(value, typeBytes) {
  switch (typeBytes) {
    case "KB":
      return kb(value);
    case "MB":
      return mb(value);
    case "GB":
      return gb(value);
    default:
      return value;
  }
}

const memory = os.totalmem();
const free = os.freemem();
const used = memory - free;
const memoryForType = (type, typeBytes = "GB") => {
  const total = {
    memory: `${memoryForTypeBytes(memory, typeBytes).toFixed(2)} ${typeBytes}`,
    free: `${memoryForTypeBytes(free, typeBytes).toFixed(2)} ${typeBytes}`,
    used: `${memoryForTypeBytes(used, typeBytes).toFixed(2)} ${typeBytes}`,
  };
  return total[type];
};

console.log("Arch: ", os.arch());
console.log("Platform: ", os.platform());
console.log("Release: ", os.release());
console.log("Cantidad de cpus: ", os.cpus().length);
console.log("Free memory: ", memoryForType("free"));
console.log("Total memory: ", memoryForType("memory"));
console.log("Used memory: ", memoryForType("used"));
console.log("Home dir: ", os.homedir());
console.log("Temp dir: ", os.tmpdir());
console.log("Hostname: ", os.hostname());
// console.log("Network interfaces: ", os.networkInterfaces());
