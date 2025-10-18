const iip = (ip) => {
  ip = ip.split(".").map(Number);
  return (ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + ip[3];
};
console.log(iip("192.168.1.1"));
const Ipr = (ip) => {
  ip = ip
    .split(".")
    .map(Number)
    .reduce((acc, byte, index) => acc + (byte << (8 * (3 - index))), 0);
  return ip;
};

console.log(Ipr("192.168.1.1"));
