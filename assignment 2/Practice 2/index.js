console.log("Practices 2 - Object");
console.log("===========================================================");

// 1. Create an object called person with properties for name, age, and gender. Assign values to these properties and then display the name and age of the person.
console.log(
  "1. Create an object called person with properties for name, age, and gender. Assign values to these properties and then display the name and age of the person."
);

const person = {
  name: "Lisa",
  age: 26,
  gender: "F",
  greet: () => {
    console.log("Hello");
  },
  friends: ["Jennie", "Jisoo", "Rosé"],
};

console.log("Name: " + person.name);
console.log("Age: " + person.age);

// 2. Add a method to the person object created in the previous assignment called greet. The method should display a greeting message “Hello”. Invoke the greet method to see the greeting message.
console.log(
  "2. Add a method to the person object created in the previous assignment called greet. The method should display a greeting message “Hello”. Invoke the greet method to see the greeting message."
);

person.greet();

// 3. Add a properties called friends to the person which contains several names and print it.
console.log(
  "3. Add a properties called friends to the person which contains several names and print it."
);

console.log(person.friends);
