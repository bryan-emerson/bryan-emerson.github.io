console.log("SUP");

let fullDeck = [];
let suitsArr =[ "Diamonds", "Clubs", "Hearts", "Spades"];
let rankArr = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
let scoreArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let halfDeckOne = [];
let halfDeckTwo = [];
let currentRound = [];
let warRound = [];

//  Define a Card class with the following properties:

//     - suit (hearts, spades, clubs, diamonds)
//     - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
//     - score (1, 2, 3, 4, ... 11, 12, 13)

class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

  // Define a Deck class with the following properties and methods:

  //   - length (the number of cards - should start at 52)
  //   - cards (an array of cards in the deck)
  //   - split in two: call shuffle method then split deck in two piles
  //   - shuffle: shuffle the cards array

  class Deck {
    constructor(cards) {
      this.length = cards.length
      this.cards = cards
    }
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i --) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldIndex = this.cards[newIndex];
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldIndex;
      }
    }
    splitDeck(cards) {
      for (let l = 0; l < this.cards.length; l ++) {
        halfDeckOne.push(this.cards[l]);
        halfDeckTwo.push(this.cards[l + 1]);
        this.cards.length --;
      }
    }
    //make a method which checks count of this.length to mutate the length of array(if you wanna get fancy)
  }

  function makeDeck() {
    for (let j = 0; j < suitsArr.length; j ++) {
      for (let k = 0; k < rankArr.length; k ++) {
        let card = new Card(suitsArr[j], rankArr[k], scoreArr[k]);
        fullDeck.push(card);
      }
    }
  }


  makeDeck();
  //console.log(fullDeck);
  let warDeck = new Deck(fullDeck);
  //console.log(warDeck);
  warDeck.shuffle();
  //console.log(warDeck);
  //splitDeck(warDeck);
  warDeck.splitDeck();
  //console.log(halfDeckOne);
  //console.log(halfDeckTwo);
  let playerOneDeck = new Deck(halfDeckOne);
  let playerTwoDeck = new Deck(halfDeckTwo);
  //console.log(playerOneDeck);
  //console.log(playerTwoDeck);


  function playRound(deckOne, deckTwo) {
    currentRound.push(deckOne.cards[0]);
    deckOne.cards.splice(0, 1);
    currentRound.push(deckTwo.cards[0]);
    deckTwo.cards.splice(0, 1);
    console.log(`${currentRound[0].rank} of ${currentRound[0].suit} versus ${currentRound[1].rank} of ${currentRound[1].suit}`);
    if (currentRound[0].score > currentRound[1].score) {
      playerOneDeck.cards.push(currentRound[0], currentRound[1]);
      currentRound.splice(0, 2);
      console.log("Player One wins this round!")
    } else if (currentRound[0].score < currentRound[1].score) {
      playerTwoDeck.cards.push(currentRound[0], currentRound[1]);
      currentRound.splice(0, 2);
      console.log("Player Two wins this round!")
    } else if (currentRound[0].score === currentRound[1].score) {
      console.log("WAR!");
      currentRound.push(deckOne.cards[0], deckOne.cards[1], deckOne.cards[2]);
      deckOne.cards.splice(0, 3);
      warRound.push(deckOne.cards[0]);
      deckOne.cards.splice(0, 1);
      currentRound.push(deckTwo.cards[0], deckTwo.cards[1], deckTwo.cards[2]);
      deckTwo.cards.splice(0, 3);
      warRound.push(deckTwo.cards[0]);
      deckTwo.cards.splice(0, 1);
      console.log(`${warRound[0].rank} of ${warRound[0].suit} versus ${warRound[1].rank} of ${warRound[1].suit}`);
      if (warRound[0].score > warRound[1].score) {
        for (let n = 0; n < currentRound.length; n ++) {
          playerOneDeck.cards.push(currentRound[n]);
        }
        currentRound.splice(0, 8);
        playerOneDeck.cards.push(warRound[0], warRound[1]);
        warRound.splice(0, 2);
        console.log("Player one wins this war!");
      } else if (warRound[0].score < warRound[1].score) {
        for (let o = 0; o < currentRound.length; o ++) {
          playerTwoDeck.cards.push(currentRound[o]);
        }
        currentRound.splice(0, 8);
        playerTwoDeck.cards.push(warRound[0], warRound[1]);
        warRound.splice(0, 2);
        console.log("Player one wins this war!");
      }
    }
  }

  playRound(playerOneDeck, playerTwoDeck);
  console.log(`player one now has ${playerOneDeck.cards.length} cards and Player 2 has ${playerTwoDeck.cards.length} cards`);
  console.log(currentRound);
  console.log(playerOneDeck);
  console.log(playerTwoDeck);
