class ActiveLetters {
  constructor() {
    this.active = [];
  }

  addLetter() {
    const random = Math.floor(Math.random() * letters.length);
    const letter = new Letter(random);
    this.active.push(letter);
  }

  printActiveLetters() {
    for (let letter of this.active) {
      console.log(letter.char);
    }
  }
}
