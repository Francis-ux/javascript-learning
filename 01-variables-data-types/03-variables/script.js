// Variables are basically containers for piece of data, and that data can be one of many different types such as strings, numbers, booleans, objects, arrays, etc.
// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Convention
// - Only letters, numbers, underscores and dollar sign
// - Can't start with number

// Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

const person = {
  name: 'Brad',
};

person.name = 'John';

person.email = 'brad@gmail';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(a);
