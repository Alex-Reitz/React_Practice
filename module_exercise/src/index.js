import { choice, remove } from "./helpers.js";
import fruits from "./foods";

let randomChoice = choice(fruits);
console.log(`I'd like one ${randomChoice} please`);
console.log(`Here you go: ${randomChoice}`);
console.log("Delicious may I have another?");
remove(fruits, randomChoice);
console.log(fruits);
console.log("I'm sorry we're all out. We have 14 left.");
