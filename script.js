const cowsay = require("cowsay");
const yosay = require("yosay");
const begoo = require("begoo");

console.log(begoo("Welcome to cat's world! \n Meow ..."));

console.log(
  cowsay.think({
    text: "I dont know why my code doesn't work.. \n Mooooo !",
    e: "oO",
    T: "U "
  })
);

console.log(yosay("Hello, and welcome to my fantastic generator full of whimsy and bubble gum!"));
