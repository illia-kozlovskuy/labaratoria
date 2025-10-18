const characters = "qwertyuiopp[]asdfghjkl;'zxcvbnm,./QWERTYUIOP[]ASDFGHJKL;''ZXCVBNM,./1234567890-=-";
function generateKey(length, chara) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chara[Math.floor(Math.random() * chara.length)];
  }
  return password;
}
console.log(generateKey(16, characters));
