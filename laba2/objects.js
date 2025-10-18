const fn = () => {
  const obj1 = { name: "" };
  let obj2 = { name: "" };
  obj1.name = "Illia";
  obj2.name = "Illia";
  obj2 = { age: 17 };
};

fn();

const createUser = (name, city) => {
  return { name, city };
};

console.log(createUser("Illia", "Cherkassy"));
