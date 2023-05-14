console.log("Practices 3 - access dom node");
console.log("===========================================================");

// 1. Create a simple html with some tags.
console.log("1. Create a simple html with some tags.");

// 2. Using getElementById to get a element and print it.
console.log("2. Using getElementById to get a element and print it.");

const testId = document.getElementById("title");
console.log(testId.textContent);

// 3. Using getElementsByClassName to get elements and print all.
console.log("3. Using getElementsByClassName to get elements and print all.");

const tetsClass = document.getElementsByClassName("text")[0];
// tetsClass[1].style.color = "red";
console.log(tetsClass.textContent);

// 4. Using querySelector to get a element by id and print it.
console.log("4. Using querySelector to get a element by id and print it.");

const queryId = document.querySelector("#title");
console.log(queryId.textContent);

// 5. Using querySelector to get a element by class and print it.
console.log("5. Using querySelector to get a element by class and print it.");

const queryClass = document.querySelector(".size");
console.log(queryClass.textContent);

// 6. Using querySelectorAll to get elements by class and print all.
console.log(
  "6. Using querySelectorAll to get elements by class and print all."
);

const testAll = document.querySelectorAll(".size");

for (let i = 0; i < testAll.length; i++) {
  console.log(testAll[i].textContent);
}
