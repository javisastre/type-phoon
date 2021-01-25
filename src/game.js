"use strict";

class Game {
  constructor() {
    this.lives = 100;
    this.score = 0;
    this.level = 1;
    this.canvas = null;
    this.library = [];
    this.canvasContext = null;
    this.gameIsOver = false;
    this.activeArea = undefined;
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
    this.activeArea = document.querySelector("#active-area img");
    console.log(canvasContainer.offsetHeight);
    console.log(this.activeArea.clientHeight);

    // we prepare the key stroke listener
    //document.body.addEventListener("keypress", handleKeyStrokes);

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
        letter.draw(400);
        if (letter.explosionCounter > 0) this.lives--;
        if (letter.winCounter > 0) this.score++;
      });

      // we clean the letters array
      this.cleanLetterArray();

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
      if (element.winCounter <= 11) {
        return element;
      }
    });
    this.library = cleanLibrary;
  }

  updateStats() {
    document.querySelector("#lives .value").innerHTML = this.lives;
    document.querySelector("#score .value").innerHTML = this.score;
  }

  handleKeyStrokes() {}
}
