const face = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

const hods = (obj) => {
  const arr = [];
  for (let hod in obj) {
    if (typeof obj[hod] === "function") {
      arr.push([hod, obj[hod].length]);
    }
  }
  return arr;
};

hods(face).forEach((item) => console.log(item));


