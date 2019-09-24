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
        document.querySelector('ul').appendChild(li);
      } else {
        let li = document.createElement('li');
        li.className = "space";
        li.textContent = " ";
        document.querySelector('ul').appendChild(li);
      }
    }
  }
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
  showMatchedLetter(letter) {
    const matchedElements = document.getElementsByClassName(letter);
    for (let li of matchedElements) {
      li.className = li.className.replace(/hide/, 'show');
    }
  }}
