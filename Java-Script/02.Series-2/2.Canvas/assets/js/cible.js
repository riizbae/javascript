class Cible { 
    constructor (cibleWidth, cibleHeight) {

        this.image = document.getElementById('ImgCible');

        this.speedx = 2;
        this.speedy = 2;
        
        this.positionx = 10;
        this.positiony = 10;
    } 
    
    draw() {

        ctx.drawImage(this.image, this.positionx, this.positiony , 56, 56);


    } 
    
    update(dT) {
    this.positionx += this.speedx;
    
    if (this.positionx > 750 || this.positionx < 5) { 
        this.speedx= -this.speedx;
    }
    this.positionx += this.speedx;  

    }
    
}