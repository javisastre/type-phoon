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
    this.canvas = null;
    this.library = [];
    this.canvasContext = null;
    this.gameIsOver = false;
    this.gameScreen = null;
  }

  start() {
    // locate canvas and start the canvas context
    this.canvas = document.querySelector("canvas");
    this.canvasContext = this.canvas.getContext("2d");

    //set canvas dimensions to the container around it
    const canvasContainer = document.querySelector("#canvas-container");

    this.canvas.setAttribute("width", canvasContainer.offsetWidth);
    this.canvas.setAttribute("height", canvasContainer.offsetHeight);

    // locate all the header elements and assign them their values
    lives = document.querySelector("#lives .value");
    lives.innerHTML = this.lives;
    score = document.querySelector("#score .value");
    score.innerHTML = this.score;
    level = document.querySelector("#level .value");
    level.innerHTML = this.level;

    // store the activeArea's element address
    activeArea = document.querySelector("#active-area img");

    // call the main loop function
    this.mainLoop();
  }

  mainLoop() {
    const loop = () => {
      // first we clear the canvas
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // we create one random letter per loop
      this.addLetter();

      // we draw all the letters or explosions
      this.library.forEach((letter) => {
        letter.updatePosition();
        letter.draw();
      });

      // we clean the letters array
      this.cleanLetterArray();
      console.log(this.library);

      // we check the score and lives
      this.updateStats();

      // we call the looper inside the looper
      window.requestAnimationFrame(loop);
    };

    // we call the animation looper
    window.requestAnimationFrame(loop);
  }

  addLetter() {
    if (Math.random() > 0.9) {
      const randomLetter = Math.floor(Math.random() * letters.length);
      const letter = new Letter(randomLetter, this.canvas);
      this.library.push(letter);
    }
  }

  cleanLetterArray() {
    let cleanLibrary = this.library.filter((element) => {
      if (element.explosionCounter <= 10) {
        return element;
      }
      // if (element.winCounter <= 12) {
      //   return element;
      // }
    });
    this.library = cleanLibrary;
  }

  updateStats() {}
}
