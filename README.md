# Type-phoon 🌪️

# Description

A hurricane of letters is coming your way! Luckily, your keyboard will help you block the typography impacts!

A Guitar Hero-like, key stroke sensitive, letter shooter game to practice your typing skills. The object of the game is to get as many points as possible by pressing the corresponding key to the incoming letters.
Video game developed at IronHack WebDev bootcamp (Module 1 Project)



# MVP (DOM - CANVAS)

Letter characters appear sequentially and they can be neutralized by pressing the corresponding key on the keyboard. The characters can only be blocked once they shine, when they enter the bottom active area. The game is over once the lives are wiped out.

# Data structure

index.html
main.js
game.js
letter.js
data.js

### index.html

- loads the JavaScript files
- loads the audios
- connects the stylesheet document

### main.js

- createPreSplashScreen
- loadSplashScreen
- removeSplashScreen / removeSplashScreen
- createInfoScreen / removeInfoScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen
- startGame
- loadInfo
- loadGameImages
- endGame
- playBackgroundAudio
- buildDom

### game.js

- constructor
- start
- levelManager
- mainLoop
- addLetter
- updateStats
- cleanLetterArray
- handleKeyStrokes
- gameOver
- buildLevelDoms

### letter.js

- constructor
- updatePosition
- draw
- printImage

### data.js

- letters array
- explosion animation array
- win animation array


# States y States Transitions

Definition of the different states and their transition (transition functions)

## startScreen

- load background image, title, start and How to play button.
- run gameScreen when Start button is clicked.
- load infoScreen when How to play button is clicked.

## infoScreen

  - load background image, contents and go back button.
  - return to startScreen when back button is clicked.

## gameScreen

- run the Game if lives are > 0.
- when lifes <= 0, load gameOverScreen.
- levels increase after certain time
- letter speed increases with each level
- background image changes in each level

## gameoverScreen

- show Game Over message, gameScore and tryAgain button.

- run gameScreen when tryAgain button is clicked.

  

# Tasks

- key stroke recognition.
- letters falling printing in a 2D environment.
- limit the active area.
- shining letter animation.
- explosion animation when failed to press the correct key
- win animation when the keystroke is correct
- scores and lives implementation
- difficulty levels implementation
- background animation



# Backlog

- 3D-like visual implementation of the letters.
- background shakes on each impact.



## Links


### Trello

[Link url](https://trello.com/invite/b/r62kFIGy/05c6fa7ab39874397a8a7a028b8f7d35/type-phoon)


### Git

URls for the project repo and deploy
[Link Repo](https://github.com/javisastre/module1project1-type-phoon)
[Link Deploy](https://javisastre.github.io/type-phoon/) /


### Slides

URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1oMvPSj70rhTfMxRFtyGQVa-A1a8S-Siy-Q3VY4E4XFI/edit?usp=sharing)