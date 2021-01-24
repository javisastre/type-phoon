class Letter {
  constructor(idNum, canvas) {
    this.canvasContext = canvas.getContext("2d");
    this.id = idNum;
    this.char = letters[idNum].char;
    this.normal = letters[idNum].normalImg;
    this.shiny = letters[idNum].shinyImg;
    this.size = 60;
    this.x = Math.floor(Math.random() * canvas.offsetWidth) - this.size;
    this.y = -30;
    this.fallSpeed = 5;
  }

  updatePosition() {
    this.y += this.fallSpeed;
  }

  draw() {
    const letterImage = new Image(this.size, this.size);
    letterImage.src = this.normal;
    this.canvasContext.drawImage(
      letterImage,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }

  explode() {
    for (let i = 0; i < 10; i++) {
      const explosionImage = new Image(this.size, this.size);
      explosionImage.src = [i];
      this.canvasContext.drawImage(
        explosionImage,
        this.x,
        this.y,
        this.size,
        this.size
      );
    }
  }
}
