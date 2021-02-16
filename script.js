console.log("SUP");

let fullDeck = [];
let suitsArr =[ "Diamonds", "Clubs", "Hearts", "Spades"];
let rankArr = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
let scoreArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

halfDeckOne = [];
halfDeckTwo = [];

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
      for (let i = this.length - 1; i > 0; i --) {
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



  // function splitDeck(wholeDeck) {
  //   for (let l = 0; l < wholeDeck.length; l ++) {
  //     halfDeckOne.push(wholeDeck.cards[l]);
  //     halfDeckTwo.push(wholeDeck.cards[l + 1]);
  //     warDeck.length --;
  //   }
  // }


  makeDeck();
  //console.log(fullDeck);
  let warDeck = new Deck(fullDeck);
  //console.log(warDeck);
  warDeck.shuffle();
  //console.log(warDeck);
  //splitDeck(warDeck);
  warDeck.splitDeck();
  console.log(halfDeckOne);
  console.log(halfDeckTwo);
