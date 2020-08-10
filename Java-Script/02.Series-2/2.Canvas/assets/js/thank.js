class Thanks { 
    constructor (gameWidth, gameHeight) { 
        this.x = gameWidth/2;
        this.y = gameHeight - 30;
        this.width = 90;
        this.height = 30; 
        this.gamewidth = gameWidth;
        this.gameheight = gameHeight;

        this.maxSpeed = 5;
        this.speed = 5;

        this.canon = {
            height: 50,
            width: 25
          };

    } 

    shoot() {
        if (typeof rocket === "string") {
          rocket = new Rocket();
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
        this.x -= 5;

        if (this.x < 0) {
            this.x = 0;
        }

        console.log(this.x);
    }

    moveRight() {
        this.speed = -this.maxSpeed;
        this.x +=5;

        if (this.x >= 715){
            this.x -=5;
        }
        
       console.log(this.x);
    }

    stop() {
        this.speed = 0;
      }
        
    draw(ctx) { 
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(
        `${this.x + 35}`,
        `${this.y - 25}`,
        this.canon.width,
        this.canon.height
        );
    } 



    update(dT){
        if (dT) return; 

        this.x += this.speed;    
    }
}

