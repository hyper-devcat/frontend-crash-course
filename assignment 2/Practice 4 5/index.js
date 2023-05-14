//Practices 4 - create dom node
console.log("Practices 4 - create dom node");
console.log("===========================================================");

// 1. create a simple html like example
console.log("1. create a simple html like example");

// 2. Append a p tag with “My first DOM created.” into container.
console.log("2. Append a p tag with “My first DOM created.” into container.");

let paragraph = document.createElement("p");
let text = document.createTextNode("My first DOM created.");
paragraph.appendChild(text);
document.body.appendChild(paragraph);

// let div = document.createElement("div");
// let p = document.createElement("p");
// div.append("Some text", p);
// document.body.append(div);

// 3. Append a ul tag.
console.log("3. Append a ul tag.");

let tag = document.createElement("ul");
// let li = document.createElement("li");
// li.appendChild(document.createTextNode("red"));
// tag.appendChild(li);
document.body.append(tag);

// 4. Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop.
console.log(
  "4. Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop."
);

function appenList() {
  let colors = ["red", "blue", "yellow"];

  for (let i = 0; i < colors.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(colors[i]));
    tag.appendChild(li);
  }
}
tag.appendChild(appenList());
document.body.append(tag);

console.log("");

// Practices 5 - events
console.log("Practices 5 - events");
console.log("===========================================================");

// Continuing from the previous practice.
// Create a text input and button called “add color”, when user click the button add the color in the text input into the list.

function addColor() {
  let colorInput = document.getElementById("colorInput");
  let colorList = document.querySelector("ul");
  let color = colorInput.value;

  if (color) {
    let liList = document.createElement("li");
    liList.appendChild(document.createTextNode(color));
    colorList.appendChild(liList);
    colorInput.value = "";
  }
}
