//Object Literals

// let mySym = Symbol("Mykey1");

// let JsUser = {
//   name: "deepa ",
//   "full name": "Deepa Chaturvedi",
//   [mySym]: "Mykey1",
//   Email: "Deepachaturvedi998@gmail.com",
//   age: 23,
//   isLogging: false,
//   location: "Bhopal",
// };

// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof [mySym]);

// console.log(JsUser);

// Object.freeze(JsUser); //Lock the objects

// JsUser.greeting = function (params) {
//   console.log("Hello JS USer");
// };
// console.log(JsUser.greeting); //[Function (anonymous)]  (Return the function)
// console.log(JsUser.greeting()); // Hello JS USer

// JsUser.greeting2 = function (params) {
//   console.log(`Hello JS USer ${this["full name"]}`);
// };
// console.log(JsUser.greeting2());

// let tinderUser = new Object();  // singleton object
// let tinderUser={} // non singleton object

let tinderUser = {};
tinderUser.id = "123dfr";
tinderUser.name = "Deepa";
tinderUser.email = "Deepachaturvrdi998@gmail.com";
// console.log(tinderUser);

// let Regular_User = {
//   Email: "deepa@gmail.com",
//   fullName: {
//     username: {
//       Firstname: "Deepa",
//       Lastname: "chaturvedi",
//     },
//   },
// };

// console.log(Regular_User.Email);
// console.log(Regular_User.fullName.username.Firstname);

let obj1 = { 1: "a", 2: "b " };
let obj2 = { 3: "a", 4: "b " };

// let obj3 = { obj1, obj2 };  //{ obj1: { '1': 'a', '2': 'b ' }, obj2: { '3': 'a', '4': 'b ' } }
// console.log(obj3);

// let obj3 = Object.assign({}, obj1, obj2);  //{ '1': 'a', '2': 'b ', '3': 'a', '4': 'b ' }
// console.log(obj3);

// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3); //{ '1': 'a', '2': 'b ', '3': 'a', '4': 'b ' }

// De-structuring of object

const Course = {
  course_name: "Js",
  price: "999",
  CourseInstructor: "Deepa",
};
// console.log(Course.price);

const { CourseInstructor: Instructor } = Course;
console.log(Instructor);
