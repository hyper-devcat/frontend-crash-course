// Parctice 2-1 : Show a random activity suggestion with a button
const refreshBored = () => {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.activity);
      const activity = data.activity;
      const activitieElement = document.getElementById("activitie");
      activitieElement.textContent = activity;
    })
    .catch((error) => {
      console.error("Something wrong", error);
    });
};

refreshBored();

// Practice 2-2 : Predict the age of a person's name with a query string
function getValue() {
  const name = document.getElementById("nameInput").value;
  console.log(name);
  // fetch the api by GET
  fetch("https://api.agify.io?name=" + name, { methods: "GET" })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data);
        // Get data age & name
        const getAge = data.age;
        const getName = data.name;
        // Catch the place of result
        const ageOutput = document.getElementById("ageOutput");
        const nameOutput = document.getElementById("nameOutput");
        // Insert the result by text
        ageOutput.textContent = getAge;
        nameOutput.textContent = getName;
        // Clear the value of input
        document.getElementById("nameInput").value = "";
      } else {
        // Catch the message where I want to replace and set the message
        let el = document.querySelector("#paragraph");
        let notice = "Please try another name.";
        // Replace the message
        el.innerHTML = "<p>" + notice + "</p>";
      }
    })
    .catch((error) => {
      console.error("Something wrong", error);
    });
}
