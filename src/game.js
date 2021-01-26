"use strict";

class Game {
  constructor() {
    this.lives = 20;
    this.score = 0;
    this.level = 1;
    this.canvas = null;
    this.library = [];
    this.canvasContext = null;
    this.activeArea = undefined;
    this.letterCreationSpeed = 0.99; // 0 crazy  -  0.99 easy
    this.gameIsOver = false;
  }

  start() {
    // locate canvas and start the canvas context
    this.canvas = document.querySelector("canvas");
    this.canvasContext = this.canvas.getContext("2d");

    //set canvas dimensions to the container around it
    const canvasContainer = document.querySelector("#canvas-container");

    this.canvas.setAttribute("width", canvasContainer.clientWidth);
    this.canvas.setAttribute("height", canvasContainer.clientHeight);

    // locate all the header elements and assign them their values
    document.querySelector("#lives .value").innerHTML = this.lives;
    document.querySelector("#score .value").innerHTML = this.score;
    document.querySelector("#level .value").innerHTML = this.level;

    // we get the activeArea's heigth
    this.activeArea =
      canvasContainer.offsetHeight -
      document.querySelector("#active-area img").offsetHeight;

    // we activate the key stroke listener
    const boundedHandleKeyStrokes = this.handleKeyStrokes.bind(this);
    document.body.addEventListener("keypress", boundedHandleKeyStrokes);

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
        letter.draw(this.activeArea);
      });

      // we check the score and lives
      this.updateStats();

      // we clean the letters array
      this.cleanLetterArray();

      if (!this.gameIsOver) {
        // we call the looper inside the looper
        window.requestAnimationFrame(loop);
      }
    };

    // we call the animation looper
    window.requestAnimationFrame(loop);
  }

  addLetter() {
    if (Math.random() > this.letterCreationSpeed) {
      const randomLetter = Math.floor(Math.random() * letters.length);
      const letter = new Letter(randomLetter, this.canvas);
      this.library.push(letter);
    }
  }

  updateStats() {
    this.library.forEach((letter) => {
      if (letter.win === true) {
        this.score++;
        letter.win = false;
      }
      if (letter.explosion === true) {
        this.lives--;
        letter.explosion = false;
      }
    });
    if (this.lives <= 0) {
      this.gameOver();
    }
    document.querySelector("#lives .value").innerHTML = this.lives;
    document.querySelector("#score .value").innerHTML = this.score;
  }

  cleanLetterArray() {
    let cleanLibrary = this.library.filter((letter) => {
      if (letter.explosion === false || letter.win === false) {
        return letter;
      }
    });
    this.library = cleanLibrary;
    console.log(this.library);
  }

  handleKeyStrokes(event) {
    this.library.forEach((letter) => {
      if (event.key.toUpperCase() === letter.char && letter.active === true) {
        letter.win = true;
        letter.winAnimation = true;
      }
    });
  }

  gameOver() {
    endGame(this.score);
  }
}
