/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
  Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("life is like a box of chocolates"),
            new Phrase("let your enemy think you are far when you are near"),
            new Phrase("what ever you choose to tolerate is the new standard you set"),
            new Phrase("A change is as good as a rest"),
            new Phrase("the Female of the species is more deadly then the male"),
            new Phrase("The darkest hour is just before the dawn"),
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        let y = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[y];
    };
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(letter) {
            this.activePhrase.checkLetter(letter);
        if (true) {
            this.activePhrase.showMatchedLetter(letter);
            
        } else {


        }
        // checkForWin();
    }
    //     checkForWin(){
    //     }
        removeLife(){
            this.missed += 1;
            
            let tries = document.querySelector('.tries');
            for(let x = 0; x < this.missed; x++){
            
            tries.className = tries.className.replace(/tries/g, "tried");
            
            let imgTried = document.querySelectorAll('li.tried img');
        
            imgTried[x].src = "images/lostHeart.png";
        }
        }
        gameOver(){
            document.querySelector('#overlay').style.display = 'block';
            let message = document.querySelector('#game-over-message');
                if(this.missed = 5){
                    message.textContent = 'Sorry, you lost. Losing is learning so keep growing that brain.';
                } else{
                    message.textContent = ' You Won, do a dance becuz while you play these games computers are taking over the World.';
                }
        }
}