"use strict";

let splashScreen;
let gameScreen;
let gameOverScreen;
let game;

function buildDom(htmlCode) {
  const div = document.createElement("div");
  div.innerHTML = htmlCode;
  return div.children[0];
}

function createSplashScreen() {
  // we insert the code in the index.html file
  splashScreen = buildDom(`
    <div id="splash">
      <img src="./img/SplashScreenTitle.png" alt="Type-phoon" id ="game-title">
      <button>Start Game</button>
    </div>
    `);
  // we link the code to the body.
  document.body.appendChild(splashScreen);
  // we style the newly created splashScreen by sending the body as paramenter.
  setBackground("../img/SplashScreenBg.jpg");
  // we look for the start button on the recently created page
  const startButton = splashScreen.querySelector("button");
  // we add an Event Listener to that button.
  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  splashScreen.remove();
}

function createGameScreen() {
  gameScreen = buildDom(`
  <div id="game">
    <header>
    <div id="left">
      <div id="lives">
        <span class="label">Lives:</span>
        <span class="value"></span>
      </div>
      <div id="score">
        <span class="label">Score:</span>
        <span class="value"></span>
      </div>
    </div>
    <div id="right">
      <div id="level">
        <span class="label">Level:</span>
        <span class="value"></span>
      </div>
    </div>
      </header>
      <div id="canvas-container">
        <canvas></canvas>
      </div>
      <div id="active-area">
        <img src="./img/ActiveArea.png" alt="Active Area" />
      </div>
  </div>`);
  document.body.appendChild(gameScreen);
  setBackground("../img/Background1.jpg");
}

function removeGameScreen() {
  gameScreen.remove();
}

function createGameOverScreen() {
  gameOverScreen = buildDom(`
  <div id="gameOver">
    <img
      src="./img/GameOverScreenTitle.png"
      alt="Game Over"
      id="game-over-title"
      />
    <button>Try again?</button>
  </div>`);
  document.body.appendChild(gameOverScreen);
  setBackground("../img/GameOverScreenBg.jpg");
}

function removeGameOverScreen() {
  if (gameOverScreen) {
    gameOverScreen.remove();
  }
}

function startGame() {
  removeSplashScreen();
  removeGameOverScreen();
  createGameScreen();
  // we create a new instance of the Game class
  game = new Game();
  // we launch the game with its start method
  game.start();
}

function setBackground(backgroundUrl) {
  document.body.style.backgroundImage = `url(${backgroundUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "bottom center";
}

window.addEventListener("load", createSplashScreen);
