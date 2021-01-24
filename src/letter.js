class Letter {
  constructor(idNum, canvas) {
    this.canvasContext = canvas.getContext("2d");
    this.id = idNum;
    this.char = letters[idNum].char;
    this.normal = letters[idNum].normalImg;
    this.shiny = letters[idNum].shinyImg;
    this.size = 20;
    this.x = 0; //Math.floor(Math.random() * canvas.offsetWidth);
    this.y = 540;
    this.fallSpeed = 20;
  }

  updatePosition() {
    this.y += this.fallSpeed;
    console.log(this.y);
  }

  draw() {
    this.canvasContext.fillStyle = "red";
    this.canvasContext.fillRect(this.x, this.y, this.size, this.size);
  }
}
