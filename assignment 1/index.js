// Practices 1
console.log("Practices 1");
// 1. Declare some variable and log the result of variables arithmetic.
console.log(
  "1. Declare some variable and log the result of variables arithmetic."
);

let addition = 2 + 3;
console.log(addition);

let subtraction = 5 - 1;
console.log(subtraction);

let multiplication = 9 * 10;
console.log(multiplication);

let division = 100 / 10;
console.log(division);

let remainder = 40 % 3;
console.log(remainder);

let add = 9;
add++;
console.log(add);

let sub = 8;
sub--;
console.log(sub);

// 2. Declare some variable and assign the result of variables arithmetic to another variable and log it.
console.log(
  "2. Declare some variable and assign the result of variables arithmetic to another variable and log it."
);

let x = 100;
let y = 200;
let z = x - y;
console.log(z);

// 3. Declare some variable and log the result to variables comparison.
console.log(
  "3. Declare some variable and log the result to variables comparison."
);

let a = 56;
let b = 30;
console.log(a < b);

// 4. Declare some variable and log the result of variables logical conversion.
console.log(
  "4. Declare some variable and log the result of variables logical conversion."
);

let c = 10;
let d = "10";
console.log(c == d || c === d);

let e = 9;
let f = 8;
console.log(e !== f && typeof e == typeof f);

console.log("====================================");
// Practices 2 - if…else
console.log("Practices 2 - if…else");
// 1. Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’ if age < 18
console.log(
  "1. Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’ if age < 18"
);

let age = 30;

if (age > 18) {
  console.log("can vote");
} else {
  console.log("can’t vote");
}

// 2. Check if a number is odd or even.
console.log("2. Check if a number is odd or even.");

let num = 52;

if (num % 2 === 0) {
  console.log("It's an even");
} else {
  console.log("It's an odd");
}

// 3. Declare two variables and check which one is big or they’re equaled.
console.log(
  "3. Declare two variables and check which one is big or they’re equaled."
);

let aa = 50;
let bb = 30;

if (aa > bb) {
  console.log("aa is bigger");
} else {
  console.log("aa = bb");
}

// 4. Declare three variables and check which one is big or they’re equaled.
console.log(
  "4. Declare three variables and check which one is big or they’re equaled."
);

let cc = 45;
let dd = 33;
let ee = 24;

if (cc > dd && cc > ee) {
  console.log("cc is the biggest");
} else if (dd > cc && dd > ee) {
  console.log("dd is the biggest");
} else if (ee > dd && ee > cc) {
  console.log("ee is the biggest");
} else if ((cc == dd) == ee) {
  console.log("cc = dd = ee");
} else {
  console.log("other situation");
}

// 5. Declare two variables for range (ex. 10, 100), declare another number variable and check a number is present in given range
console.log(
  "5. Declare two variables for range (ex. 10, 100), declare another number variable and check a number is present in given range"
);

let numberA = 101;
if (10 <= numberA >= 100) {
  console.log("numberA present in given range");
} else {
  console.log("numberA doesn't present in given range");
}

// 6. Declare a variable called year and check the year is leap year or not.
console.log(
  "6. Declare a variable called year and check the year is leap year or not."
);

let year = 2400;

if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
  console.log("year is leap year");
} else {
  console.log("year isn't leap year");
}

console.log("====================================");
// Practices 3 - switch case
console.log("Practices 3 - switch case");
// 1. Declare a variable called day type is number and show the  result of day of string  (0 → ‘Sunday’, 1 → ‘Monday’, … 6 → ‘Saturday’)
console.log(
  "1. Declare a variable called day type is number and show the  result of day of string  (0 → ‘Sunday’, 1 → ‘Monday’, … 6 → ‘Saturday’)"
);

let day = 5;

switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("This is not a valid day");
}

// 2. Declare a variable called season type is number and show the  result of season of string 	(1 → ‘Spring’, 2 → ‘Summer’, 3 → ‘Fall’, 4 → ‘Winter’)
console.log(
  "2. Declare a variable called season type is number and show the  result of season of string 	(1 → ‘Spring’, 2 → ‘Summer’, 3 → ‘Fall’, 4 → ‘Winter’)"
);

let season = 4;

switch (season) {
  case 1:
    console.log("Spring");
    break;
  case 2:
    console.log("Summer");
    break;
  case 3:
    console.log("Fall");
    break;
  case 4:
    console.log("Winter");
    break;
  default:
    console.log("This is not a valid season");
}
console.log("====================================");
// Practices 4 - loop (for and while)
console.log("Practices 4 - loop (for and while)");
// 1. Show 1 to 10000
console.log("1. Show 1 to 10000");

for (let index = 1; index <= 10; index++) {
  console.log(index);
}

console.log("");

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Show 1 to 100 even numbers
console.log("2. Show 1 to 100 even numbers");

for (let even = 2; even <= 10; even += 2) {
  console.log(even);
}

console.log("");

let ev = 2;
while (ev <= 10) {
  console.log(ev);
  ev += 2;
}

// 3. Show 1 to 100 odd numbers
console.log("3. Show 1 to 100 odd numbers");

for (let odd = 1; odd <= 10; odd += 2) {
  console.log(odd);
}

console.log("");

let od = 1;
while (od <= 10) {
  console.log(od);
  od += 2;
}

// 4. Show 1 to 100 prime numbers
console.log("4. Show 1 to 100 prime numbers");

for (let p = 1; p <= 100; p++) {
  let isPrime = p;
  let primeFound = true;
  for (let q = 2; q < isPrime; q++) {
    if (isPrime % q == 0) {
      primeFound = false;
      break;
    }
  }
  if (primeFound) {
    console.log(isPrime);
  }
}

// 5. Declare a variable called size and show the height of size triangle

let size = 6;

for (let k = 0; k < size; k++) {
  let row = "";
  for (let m = 0; m <= k; m++) {
    row += "#";
  }
  console.log(row);
}

// 6. Show Multiplication Table (from 1*1 to 9*9)
console.log("6. Show Multiplication Table (from 1*1 to 9*9)");

for (let r = 1; r <= 9; r++) {
  let row = "";
  for (let s = 1; s <= 9; s++) {
    row += r * s + "\t";
  }
  console.log(row);
}

// for (let r = 1; r <= 9; r++) {
//   let row = "";
//   for (let s = 1; s <= 9; s++) {
//     row += r + "*" + s + "=" + r * s + "\t";
//   }
//   console.log(row);
// }

console.log("");

let row = 1;

while (row <= 9) {
  let column = 1;
  let line = "";
  while (column <= 9) {
    line += row + "*" + column + "=" + row * column + "\t";
    column++;
  }
  console.log(line);
  row++;
}

// let row = 1;

// while (row <= 9) {
//   let column = 1;
//   let line = "";
//   while (column <= 9) {
//     line += row * column + "\t";
//     column++;
//   }
//   console.log(line);
//   row++;
// }
console.log("====================================");
// Practices 5 - function
console.log("Practices 5 - function");
// 1. Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true
console.log(
  "1. Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true"
);

const isEven = (numbers) => {
  if (numbers % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(7));

// 2. Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true
console.log(
  "2. Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true"
);

const isLeapYear = (years) => {
  if (years % 4 === 0 && years % 100 === 0 && years % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2400));

// 3. Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true
console.log(
  "3. Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true"
);

const isPrime = (primeNumber) => {
  if (primeNumber <= 1) {
    return false;
  }

  for (let z = 2; z < primeNumber; z++) {
    if (primeNumber % z === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(8));

// 4. Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
console.log(
  "4. Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them."
);

const findMax = (c, d, e) => {
  if (c > d && c > e) {
    return c;
  } else if (d > c && d > e) {
    return d;
  } else {
    return e;
  }
};

console.log(findMax(8, 5, 7));
