//Array

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// Arrays Methods
// arr.push(10); // Insert the element into  Array in the last
// arr.push(15);
// arr.push(11);
// console.log(arr);

// arr.pop();  //Delete the element from  Array in the last
// arr.pop();
// arr.pop();
// console.log(arr);

// arr.unshift(9);  //  Insert the element into  Array in the start
// console.log(arr);

// arr.shift();  //Delete the element from Array in the start
// console.log(arr);

// console.log(arr.includes(9));// check the 9 element the array is present or not

// console.log(arr.indexOf(6));
// console.log(arr);

// let newarr = arr.join(); // Join convrt the arry into string
// console.log(arr);
// console.log(newarr);

// interview Questions
// What is difference between slice and splice methods

//slice(): The slice() method is used to extract a portion of an array and returns a new array containing the extracted elements.
//  splice(): The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// let newArr = [2, 4, 6, 8];
// // let num1 = newArr.slice(1, 3);
// // console.log(num1);//[ 4, 6 ]
// // console.log(newArr);//[ 2, 4, 6, 8 ]

// let num2 = newArr.splice(1, 3);
// console.log(num2); //[ 4, 6, 8 ]
// console.log(newArr); //[ 2 ]

// let evenArr = [2, 4, 6, 8, 10];
// let oddArr = [1, 3, 5, 7, 9, 11];
// evenArr.push(oddArr);
// console.log(evenArr);
// evenArr.concat(oddArr);
// console.log(evenArr);

// let sum_of_Arr = [...evenArr, ...oddArr];// Spread operator
// console.log(sum_of_Arr);

// let another_Arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 1], 10];
// let Real_Another_Arr = another_Arr.flat(Infinity);
// console.log(Real_Another_Arr);

// console.log(Array.isArray("Deepa"));
// console.log(Array.from("Deepa"));
// console.log(Array.from({ name: "Deepa" })); // Interesting case

// //if you want to convert variable in Arry

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// let score4 = 400;

// console.log(Array.of(score1, score2, score3, score4));
