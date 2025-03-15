const student = {
  name: "deepa",
  age: 22,
  eng: 90,
  math: 98,
  phy: 89,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks=${avg}`);
  },
};

//try and catch block

console.log("hello");
console.log("hello");
try {
  console.log(a);
} catch (err) {
//   console.log("caught an error... a is not defined");
  console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2");
