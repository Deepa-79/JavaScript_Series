// function AddTwoNumber(num1, num2) {
//   //parameter
//   console.log(num1 + num2);
// }

// AddTwoNumber(4, 3); // Arguments

// let result = AddTwoNumber(4, 3);
// console.log("result :", result); //undefined

function AddTwoNumber(num1, num2) {
  //   let result = num1 + num2;
  //   return result;

  return num1 + num2;
}

// AddTwoNumber(4, 3);
let result = AddTwoNumber(4, 3);
//console.log("result :", result); //result : 7

function userLoggin(username) {
  return `${username} just logging`;
}
// console.log(userLoggin("Deepa")); //Deepa just logging

//console.log(userLoggin("")); //just logging

//console.log(userLoggin()); //undefined just logging (Interview Question)

function userLoggin(username) {
  if (username === undefined) {
    //if(!username)
    console.log("Please Enter Username");
    return;
  }
  return `${username} just logging`;
}

//console.log(userLoggin());

//note
//"" -false value
// undefined - false value

//Rest Operator
// function CalculateCartPrize(...prize) {
//   return prize;
// }

// console.log(CalculateCartPrize(200, 400, 60000));

//interview question
function CalculateCartPrize(val1, val2, ...prize) {
  return prize;
}

//console.log(CalculateCartPrize(200, 400, 60000));

let userData = {
  userName: "Deepa",
  Email: "DeepaChaturvedi998@gmail.com",
};

function handleObject(anyobject) {
  console.log(
    ` Username is ${anyobject.userName} and Email id is ${anyobject.Email}`
  );
}

// handleObject(userData);

handleObject({
  userName: "pooja",
  Email: "poojaChaturvedi@gmail.com",
});
