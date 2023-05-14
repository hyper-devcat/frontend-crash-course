console.log("Practices 1 - Array");
console.log("===========================================================");

// 1. Declare a array called fruits with some fruits in default.
console.log("1. Declare a array called fruits with some fruits in default.");
const fruits = ["Apple", "Orange", "Melon", "Strawberry"];

// 2. Print every element in the fruits array declared above.
console.log("2. Print every element in the fruits array declared above.");
console.log(fruits);

//3. Modify the thirth fruit to Durian and print the fruits array.
console.log("3. Modify the thirth fruit to Durian and print the fruits array.");

fruits.splice(2, 0, "Durian");
console.log(fruits);

// 4. Using push method to add two fruits into array.
console.log("4. Using push method to add two fruits into array.");

fruits.push("Guava", "Banana");
console.log(fruits);

// 5. Remove the first fruit from the array.
console.log("5. Remove the first fruit from the array.");

fruits.shift();
console.log(fruits);

// 6. Using for, while loop to print the element in the fruits array.
console.log(
  "6. Using for, while loop to print the element in the fruits array."
);

for (const fruit of fruits) {
  console.log(fruit);
}

// 7. Declare a array called numbers and set each element to its squared using map.
console.log(
  "7. Declare a array called numbers and set each element to its squared using map."
);

const numbers = [11, 9, 79, 37, 28];
const map1 = numbers.map((i) => i * i);

console.log(map1);

// 8. Declare a array called numbers and filter the prime number using filter.
console.log(
  "8. Declare a array called numbers and filter the prime number using filter."
);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

const filter1 = numbers.filter((num) => isPrime(num));

console.log(filter1);

// 9. Declare a array called numbers and computed the sum of the elements using reduce.
console.log(
  "9. Declare a array called numbers and computed the sum of the elements using reduce."
);

const sum = numbers.reduce((a, b) => a + b);

console.log(sum);
