class Letter {
  constructor(idNum, canvas) {
    this.canvasContext = canvas.getContext("2d");
    this.id = idNum;
    this.char = letters[idNum].char;
    this.normal = letters[idNum].normalImg;
    this.shiny = letters[idNum].shinyImg;
    this.size = 20;
    this.x = Math.floor(Math.random() * canvas.offsetWidth);
    this.y = -30;
    this.fallSpeed = 10;
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
    // this.canvasContext.fillStyle = "red";
    // this.canvasContext.fillRect(this.x, this.y, this.size, this.size);
  }
}
