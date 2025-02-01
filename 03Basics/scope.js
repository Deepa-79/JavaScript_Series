// let a=10;
// const b=20;
// var c=30;

// console.log(a); //10
// console.log(b); //20
// console.log(c); //30

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);  // a is not defined
// console.log(b); // b is not defined
// console.log(c); //30 because of var  datatype

function one() {
  let userName = "Deepa";
  function two() {
    let website = "Youtube";
    console.log(`User name is ${userName} and Website is ${website}`);
  }
  //   two(); //User name is Deepa and Website is Youtube

  //   console.log(website); //ReferenceError: website is not defined
  console.log("function one");
}
// one(); //function one

// console.log(addOne(5)); //6  no Error
function addOne(num1) {
  return num1 + 1;
}
// console.log(addOne(5)); //6

// let result = function addTwo(num2) {
//   return num2 + 2;
// };

//console.log(result); //[Function: addTwo]

// addTwo(5); //ReferenceError: Cannot access 'addTwo' before initialization

let addTwo = function (num2) {
  return num2 + 2;
};

// console.log(addTwo);  //[Function: addTwo]

// console.log(addTwo(5)); //7

// addTwo(5); //no Error
