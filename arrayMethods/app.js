//forEach method

let arr = [1, 2, 3, 4, 5];
let print = function (el) {
  console.log(el);
};
arr.forEach(print);

//map

let num = [1, 2, 3, 4];
let double = num.map((el) => {
  return el * 2;
});

//filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = nums.filter((el) => {
  return el % 2 != 0; //even ->true , odd -> false
});


//every

