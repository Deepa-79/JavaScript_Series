let max = prompt("enter a maximum number");
console.log(max);

let random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == random) {
    console.log("you are right congrats!! random nuumber was",random);
    break;
  }
  else if(guess<random){
    guess=prompt(" hint : your guess was too small. please try  again")
  }
  else{
    guess=prompt(" hint : your guess is too large.please try again")
  }
}
