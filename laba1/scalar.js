const incNum = (num) => num + 10;
const x = 5;
const y = incNum(x);
console.log({ x, y });
const incObj = (scal) => {
  scal.n += 100;
  console.dir(scal);
};
const scal = {
  n: 20,
  y: 690,
};
incObj(scal);
