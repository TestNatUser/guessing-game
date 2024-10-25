class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.guessCount = 0
  }

  setRange(min, max) {
    this.min = min;
    this.max = max
  }

  guess() {
   return this.guessCount=Math.round((this.min + this.max)/2);
  }

  lower() {
    this.max = this.guessCount;
  }

  greater() {
    this.min = this.guessCount;
  }
}

module.exports = GuessingGame;
