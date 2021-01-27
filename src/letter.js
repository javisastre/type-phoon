class Letter {
  constructor(idNum, canvas) {
    this.canvasContext = canvas.getContext("2d");
    this.id = idNum;
    this.char = letters[idNum].char;
    this.normal = letters[idNum].normalImg;
    this.shiny = letters[idNum].shinyImg;
    this.active = false;
    this.explosion = false;
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
    const exploded = this.win === false && this.y > explosionLimit;
    const won = this.win === true && this.explosion === false;
    const normalLetter = this.y <= activeHeigth && !exploded && !won;
    const shinyLetter =
      this.y > activeHeigth &&
      this.y < explosionLimit &&
      this.win === false &&
      this.explosion === false;

    // We check what's the situation
    switch (true) {
      case exploded:
        this.printImage(explosionAnimationArr[this.explosionCounter]);
        this.explosionCounter++;
        this.explosion = true;
        break;
      case won:
        this.printImage(winAnimationArr[this.winCounter]);
        this.winCounter++;
        break;
      case normalLetter:
        this.printImage(this.normal);
        break;
      case shinyLetter:
        this.active = true;
        this.printImage(this.shiny);
        break;
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
