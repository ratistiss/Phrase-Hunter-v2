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
const target = document.querySelectorAll(".keyrow .key");
for (var i = 0; i < target.length; i++) {
  target[i].addEventListener('click', (e) => {
    letter = e.target.innerText;
    game.handleInteraction(e.target);
  })
};

