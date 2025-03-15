function isAdult() {
  let age = 18;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }
}

// isAdult();

//function with arguments

function printInfo(name, age) {
  console.log(`${name}'s age is  ${age}.`);
}

// printInfo("deepa", 22);

//practice questions

// 1. Create a function that gives us the average of 3 numbers

function calAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

// calAvg(2, 4, 7);

// Create a function that prints the multiplication table of a number

function printTable(n) {
  for (let i = n; i <= n * 10; i += n) console.log(i);
}

// printTable(2);

//Create a function that return the sum of numbers from 1 to n.

function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
getSum(3);
