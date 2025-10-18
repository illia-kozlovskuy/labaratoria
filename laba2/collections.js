const phonebook = [
  { name: "Anna", phone: "+380981234567" },
  { name: "Ivan", phone: "+380671234890" },
  { name: "Alina", phone: "+380994866972" },
  { name: "Tom", phone: "+380931112233" },
  { name: "Sofia", phone: "+380631987654" },
];

function Name(name, phone) {
    for( const person of phonebook)
        if (person.name === name) return person.phone;
    return 'Not found';
};
console.log(Name("Sofia"));
console.log(Name("Ivan"));
const hash = {
  Anna: +380971712571,
  Ivan: +380638602382,
  Alina: +380994866972,
  Dasha: +380631112233,
  Tom: +380501112233,
  Sofia: +380671234567,
};
function book(name) {
  return hash[name];
}
console.log(book("Anna"));
console.log(book("Tom"));