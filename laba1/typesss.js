const array = [
    5, 
    -200, 
    true, 
    "hello", 
    null, 
    "poni", 
    false, 
    "python", 
    17,
];

const typeCounts = { number: 0, string: 0, boolean: 0, object: 0 };

function countTypes(arr) {
  for (const el of arr) {
    const t = typeof el;
    if (typeCounts.hasOwnProperty(t)) {
      typeCounts[t]++;
    }
  }
}

countTypes(array);
console.log(typeCounts);

