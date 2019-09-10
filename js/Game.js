/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
  Game.js */

class Game {
    constructor(){
            this.missed = 0;
            this.phrases = [{phrase: "life is like a box of chocolates"},
             {phrase: "let your enemy think you are far when you are near"},
             {phrase: "what ever you choose to tolerate is the new standard you set"},
             {phrase: "A change is as good as a rest"},
             {phrase: "the Female of the species is more deadly then the male"},
             {phrase: "The darkest hour is just before the dawn"},
            ];
            this.activePhrase = null;

        }

    getRandomPhrase(){
        var y = Math.floor(Math.random() * this.phrases.length);
            return this.phrases[y];
    };

}