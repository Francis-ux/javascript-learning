// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'John',
  age: 30,
};

let newName = name;
newName = 'Pete';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson);
