function funfi(a, b) {
  return (a + b) / 2;
}
console.log(funfi(10, 20));

function square(c) {
  return c ** 2;
}
console.log(square(12));

function cube(d) {
  return d ** 3;
}
console.log(cube(5));

function dorivne() {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    array.push(funfi(square(i), cube(i)));
  }
  return array;
}
console.log(dorivne());
