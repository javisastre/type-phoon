class Letter {
  constructor(idNum, canvas) {
    this.canvasContext = canvas.getContext("2d");
    this.id = idNum;
    this.char = letters[idNum].char;
    this.normal = letters[idNum].normalImg;
    this.shiny = letters[idNum].shinyImg;
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

  draw() {
    if (this.win === true) {
      this.printImage(winAnimation[this.winCounter]);
      this.winCounter++;
    } else if (this.y <= 450) {
      this.printImage(this.normal);
    } else if (this.y > 450 && this.y < 700) {
      this.printImage(this.shiny);
    } else {
      this.printImage(explosions[this.explosionCounter]);
      this.explosionCounter++;
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
