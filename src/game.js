"use strict";

let lives;
let score;
let level;
let activeArea;

class Game {
  constructor() {
    this.lives = 20;
    this.score = 0;
    this.level = 1;
    this.library = new ActiveLetters();
  }

  start() {
    lives = document.querySelector("#lives .value");
    lives.innerHTML = this.lives;
    score = document.querySelector("#score .value");
    score.innerHTML = this.score;
    level = document.querySelector("#level .value");
    level.innerHTML = this.level;
    activeArea = document.querySelector("#active-area img");

    this.library.addLetter();
    this.library.printActiveLetters();

    addEventListener("mouseover", function (event) {
      console.log("over");
    });
  }
}
