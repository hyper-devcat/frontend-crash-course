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
  fetch("https://api.agify.io?name=" + name, { methods: "GET" })
    .then((response) => response.json())
    .then((data) => {
      if (data.age) {
        console.log(data);
        const getAge = data.age;
        const getName = data.name;
        const ageOutput = document.getElementById("ageOutput");
        const nameOutput = document.getElementById("nameOutput");
        ageOutput.textContent = getAge;
        nameOutput.textContent = getName;
        document.getElementById("nameInput").value = "";
      } else {
        let el = document.querySelector("#paragraph");
        let notice = "Please try another name.";
        el.innerHTML = "<p>" + notice + "</p>";
      }
    })
    .catch((error) => {
      console.error("Something wrong", error);
    });
}
