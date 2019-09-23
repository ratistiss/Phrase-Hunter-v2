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
let button2 = document.querySelectorAll("#qwerty .keyrow button");
button2.addEventListener("click", (e) => {
  letter = e.target.innerText;
  game.handleInteraction(e.target);
});

