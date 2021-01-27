class Letter {
  constructor(idNum, canvas) {
    this.canvasContext = canvas.getContext("2d");
    this.id = idNum;
    this.char = letters[idNum].char;
    this.normal = letters[idNum].normalImg;
    this.shiny = letters[idNum].shinyImg;
    this.active = false;
    this.explosionCounter = 0;
    this.win = false;
    this.winCounter = 0;
    this.size = 60;
    this.x = Math.floor(Math.random() * canvas.offsetWidth) - this.size;
    this.y = -30;
    this.fallSpeed = 5;
  }

  updatePosition() {
    this.y += this.fallSpeed;
  }

  draw(activeHeigth) {
    // we set the limit in which letters will explode
    const explosionLimit = activeHeigth + (activeHeigth * 3) / 4;

    // 4 conditions for the letter to be drawn
    // 1. the letter reaches the explosion limit. Explosion animation starts
    if (this.y > explosionLimit && this.win === false) {
      this.printImage(explosionAnimationArr[this.explosionCounter]);
      this.explosionCounter++;
      // 2. the letter was pressed and score went up. Win animation starts
    } else if (this.win === true) {
      this.printImage(winAnimationArr[this.winCounter]);
      this.winCounter++;

      // 3. the letter is before the active area. Print normal letter.
    } else if (this.y <= activeHeigth) {
      this.printImage(this.normal);

      // the letter is on the active area. Print shiny letter.
    } else if (this.y > activeHeigth && this.y <= explosionLimit) {
      this.active = true;
      this.printImage(this.shiny);
    }
  }

  printImage(srcUrl) {
    const letterImage = new Image(this.size, this.size);
    letterImage.src = srcUrl;
    this.canvasContext.drawImage(
      letterImage,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
}
