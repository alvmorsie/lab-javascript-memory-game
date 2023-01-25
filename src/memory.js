class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
    }
    return true
    //else if (card1 !== card2) {
    // return false
    // }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 0 || this.pairsGuessed < 12) {
      return false
    }
    else return true
  }
}