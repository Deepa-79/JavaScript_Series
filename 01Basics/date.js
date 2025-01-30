//Dates

// let myDate = new Date();
// console.log(myDate); //2025-01-30T10:30:43.788Z
// console.log(myDate.toDateString()); //Thu Jan 30 2025
// console.log(myDate.toISOString()); //2025-01-30T10:30:43.788Z
// console.log(myDate.toJSON()); //2025-01-30T10:30:43.788Z
// console.log(myDate.toLocaleDateString()); //30/1/2025
// console.log(myDate.toLocaleString()); //30/1/2025, 4:00:43 pm

// Interview questions
// What is the type of Date
//ans - Date is the object Type

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(23, 0, 12);
// let myCreatedDate = new Date("2023-01-12");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now() / 1000)); //interview question imp

let newDate = new Date();
// console.log(newDate.getDate());

newDate.toLocaleDateString("default", {
  weekday: "long",
});
