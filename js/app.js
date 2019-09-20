/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
  app.js */

let game = null;
const button = document.querySelector("button");
button.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});


let letter = null;
const button2 = document.querySelector("#qwerty");
button2.addEventListener("click", (e) => {
  letter = e.target.innerText;
  game.handleInteraction(letter);
});

