class Rocket {
  constructor (gameWidth, gameHeight) {
    this.img = document.getElementById('ImgRocket');

    this.position = { x: thank.x+ 30, y: thank.y - 30 };
    this.speed = { y: 10 };
    this.width = 36;
    this.height = 56;

    this.gameHeight = thank.gameHeight;
    this.gameWidth = thank.gameWidth;

  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y - this.width + this.height,
      this.width,
      this.height
    );
    // ctx.loop();
  }

  if (thank = 0){
    this.img
  }

  

  update(dT){
      this.position.y -= this.speed.y;




      if (this.gameHeight - this.position.y === this.gameHeight) rocket = "";
      return rocket;

      }

}

