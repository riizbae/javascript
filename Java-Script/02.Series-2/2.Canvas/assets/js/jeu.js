const canvas = document.getElementById("pewpew");
canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext("2d");
const ballRadius = 30;

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let paddleHeight = 50;
let cibleY = 500;
let cibleW= 20;
let targHeight = 500;
let paddleWidth = 150;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    } 
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}


 function drawBall() {
    ctx.beginPath();
    ctx.arc(x, 35, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    
    if (x > 750 || x < 5) { 
        dx = -dx;
    }
    x += dx;  
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

}

function drawTarget(){
    ctx.beginPath();
    ctx.rect(paddleX+60, targHeight , 30, 50);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawCible(callback){
    ctx.beginPath();
    ctx.rect(paddleX+65, cibleY, cibleW, 20);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
} 

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();  
    drawTarget();
    drawCible();


    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }

    if(upPressed){
        cibleY += -120;
        setInterval(10);
        if (cibleY + cibleW > canvas.height){
            // cibleY = 90;
            // drawCible(0,0,0,0);
            console.log('bingo');
        }
    }
    
}

setInterval(draw, 20);





 
 
