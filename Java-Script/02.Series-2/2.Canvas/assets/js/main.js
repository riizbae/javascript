
let canvas = document.getElementById('pewpew');
let ctx = canvas.getContext('2d');

let GAME_WIDTH = 800; 
let GAME_HEIGHT = 600; 

let thank = new Thanks(GAME_WIDTH, GAME_HEIGHT);
thank.draw(ctx);


let cible = new Cible();
cible.draw(ctx);



let rocket = "";
// rocket.draw(ctx);

let lasTime = 0;


function gameLoop(timstamp){
    let dT = timstamp - lasTime;
    lasTime = timstamp;

    ctx.clearRect( 0, 0, GAME_WIDTH, GAME_HEIGHT);
    thank.update(dT);
    thank.draw(ctx);

    cible.update(dT);
    cible.draw(ctx);


    if (rocket) {
        rocket.update(dT);
        rocket.draw(ctx);
  }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

// INPUT
class InputHandler {
  constructor(thank) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          thank.moveLeft();
          break;
        case 38:
          // if (gameStatus !== 2) {
            thank.shoot();
          // }
          console.log("but !");
          break;
        case 32:
          // if (gameStatus !== 2) {
            thank.shoot();
            console.log("bas !");
          // }
          break;
        case 39:
          thank.moveRight();
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (thank.speed < 0) thank.stop();
          break;
        case 39:
          if (thank.speed > 0) thank.stop();
          break;
        default:
          break;
      }
    });
  }
}

new InputHandler(thank);

let pang = 10
while (pang < 10){
  rocket.draw(ctx) ++;
  console.log("rechargement");
}

