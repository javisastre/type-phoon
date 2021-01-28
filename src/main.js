"use strict";

let preSplashScreen, splashScreen, infoScreen, gameScreen, gameOverScreen, game;
const cowSound = document.querySelector("#cow-sound");
let cowStart = true;

function buildDom(htmlCode) {
  const div = document.createElement("div");
  div.innerHTML = htmlCode;
  return div.children[0];
}

function createPreSplashScreen() {
  preSplashScreen = buildDom(`
  <div id = "preSplash">
  <button >Start Type-Phoon Game</button>
  </div>
  `);
  document.body.appendChild(preSplashScreen);
  const preStartButton = document.querySelector("#preSplash");
  preStartButton.addEventListener("click", loadSplashScreen);
}

function loadSplashScreen() {
  preSplashScreen.remove();
  // we play background sound
  playBackgroundAudio();
  // we launch the Spalsh screen
  createSplashScreen();
}

function createSplashScreen() {
  // we insert the code in the index.html file
  splashScreen = buildDom(`
  <div id = "splash-container">
    <div id="splash">
      <img src="img/SplashScreenTitle.png" alt="Type-phoon" id ="game-title">
      <nav>
        <button id = "start">Start Game</button>
        <button id = "info">How to play?</button>
      </nav>
    </div>
    <img src="img/cow.png" alt="Flying cow" id ="cow">
    </div>
    `);
  // we link the code to the body.
  document.body.appendChild(splashScreen);

  // we look for the buttons on the recently created page
  const startButton = splashScreen.querySelector("#start");
  const infoButton = splashScreen.querySelector("#info");

  // we set the cow's animation in here
  if (cowStart === true) {
    setTimeout(() => {
      splashScreen.querySelector("#cow").setAttribute("class", "moo");
      cowSound.currentTime = 0;
      cowSound.play();
      cowStart = false;
    }, 4000);
  }

  // we add an Event Listener to that button.
  startButton.addEventListener("click", startGame);
  infoButton.addEventListener("click", loadInfo);
}

function removeSplashScreen() {
  splashScreen.remove();
}

function createInfoScreen() {
  infoScreen = buildDom(`
  <div id="info-screen-container">
<div id="info-screen">
  <img src="img/InfoScreenTitle.png" alt="Info" id ="info-title">
  <span>Use your keyboard to increase your score!</span>
  <button id = "back">Go Back</button>
</div>
</div>
`);
  document.body.appendChild(infoScreen);

  // we look for the button and add an event listener
  const backButton = infoScreen.querySelector("#back");
  backButton.addEventListener("click", removeInfoScreen);
}

function removeInfoScreen() {
  infoScreen.remove();
  createSplashScreen();
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
        <img src="img/ActiveArea.png" alt="Active Area" />
      </div>
  </div>`);
  document.body.appendChild(gameScreen);
}

function removeGameScreen() {
  gameScreen.remove();
}

function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
  <div id="gameover-container">
  <div id="gameover">
  <img
    src="img/GameOverScreenTitle.png"
    alt="Game Over"
    id="game-over-title"
  />
  <span class="score">Your score: </span><span class="score" id="value">${score}</span>
  <button>Try again?</button>
  </div>
</div>
`);
  document.body.appendChild(gameOverScreen);

  // we print the score of the last game
  document.body.querySelector("#value").innerHTML = score;

  // we grab the button of the Game Over screen
  const tryAgainButton = gameOverScreen.querySelector("button");

  // we add an Event Listener to that button.
  tryAgainButton.addEventListener("click", startGame);
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
  loadGameImages();
}

function loadInfo() {
  removeSplashScreen();
  createInfoScreen();
}

function loadGameImages() {
  const allImages = gameScreen.querySelectorAll("img");
  const totalImages = allImages.length;
  let loadedImages = 0;

  allImages.forEach((image) => {
    image.addEventListener("load", () => {
      loadedImages++;
      const allImagesLoaded = loadedImages === totalImages;
      if (allImagesLoaded) {
        // we create a new instance of the Game class
        game = new Game();
        // we launch the game with its start method
        game.start();
      }
    });
  });
}

function endGame(score) {
  removeSplashScreen();
  removeGameScreen();
  createGameOverScreen(score);
}

function playBackgroundAudio() {
  const wind = document.querySelector("#wind");
  wind.currentTime = 0;
  wind.play();
  wind.volume = 0.4;
  wind.loop = true;
}

window.addEventListener("load", createPreSplashScreen);
