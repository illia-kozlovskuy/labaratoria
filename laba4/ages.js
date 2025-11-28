const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
  hitler: { born: 1889, died: 1945 },
  stalin: { born: 1878, died: 1953 },
};

function ages(age) {
  const ages = {};
  for (let persons in age) {
    ages[persons] = age[persons].died - age[persons].born;
  }
  return ages;
}
console.table(ages(persons));
