// let user = {
//   username: "Deepa",
//   prize: 400,
//   welcomeMsg: function () {
//     console.log(`${this.username}, WelCome to Website`);
//     console.log(this);
//   },
// };
// // user.welcomeMsg(); //Deepa, WelCome to Website

// user.username = "pooja";
// user.welcomeMsg();

// // console.log(this); //{}

// let Data = function () {
//   userName: "Deepa",
//   console.log(this.userName); //undefined
// };
//Data(); //undefined

// let Data = () => {
//   userName: "Deepa", console.log(this.userName); //undefined
// };
// Data(); //undefined

//Arrow Function
//() => {}

//let AddTwoNumber = (num1, num2) => {
//  return num1 + num2; // Explicit Return
//};

//console.log(AddTwoNumber(5, 7)); //12

//let AddTwoNumber = (num1, num2) => num1 + num2; //implecit  return
//let AddTwoNumber = (num1, num2) => (num1 + num2);
//console.log(AddTwoNumber(5, 7)); //12

//Return Object

let AddTwoNumber = (num1, num2) => ({
  userName: "Deepa",
});
console.log(AddTwoNumber(5, 7)); //{ userName: 'Deepa' }
