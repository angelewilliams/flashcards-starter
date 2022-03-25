const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  start(invoke){
    const flashCards =  [];
    prototypeQuestions.forEach((dataObj) => {
      flashCards.push(new Card (dataObj.id, dataObj.question, dataObj.answers, dataObj.correctAnswer));
    });
    const deck =  new Deck(flashCards);
    this.currentRound = new Round(deck);
    if(invoke){
      this.printMessage(deck, this.currentRound);
      this.printQuestion(this.currentRound);
    }
  }
}

module.exports =
  Game;
