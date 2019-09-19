/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
  Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase.charAt(i).match(/[a-z]/i)) {
        let li = document.createElement('li');
        li.className = `hide letter ${this.phrase.charAt(i)}`;
        li.textContent = `${this.phrase.charAt(i)}`;
        document.querySelector('#phrase').appendChild(li);
      } else {
        let li = document.createElement('li');
        li.className = "hide space";
        li.textContent = " ";
        document.querySelector('#phrase').appendChild(li);
      }
    }
  }
  checkLetter(letter) {
    console.log(this.phrase);
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
  showMatchedLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase.charAt(i).includes(letter)) {
        li.classList.remove = `hide letter ${this.phrase.charAt(i)}`;
        li.classList.add = `show letter ${this.phrase.charAt(i)}`;
        li.textContent = `${this.phrase.charAt(i)}`;
        console.log(letter);
      }
    }
  }
}