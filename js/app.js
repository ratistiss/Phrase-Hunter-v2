/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
  app.js */

const game = {};


document.querySelector('button').addEventListener("click", () => {
    this.game = new Game();
    this.game.startGame();
});


const button2 = document.querySelector("#qwerty");

button2.addEventListener("click", (e) => {

  console.log(e.target.innerText);
  this.game.handleInteraction(e.target.innerText);
});


