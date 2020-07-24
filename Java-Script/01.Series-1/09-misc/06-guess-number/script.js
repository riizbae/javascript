// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let min = 1;
    let max = 100;

function nb_aleatoire(min, max)
{
     let nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}

let a = prompt('Guess the number');
while (nb_aleatoire > a) {
  let a = prompt('Too low');
  if (nb_aleatoire < a) { 
    prompt("Too high")
  }
  else (nb_aleatoire =! a);{
       prompt('Well guessed')
  }
}

})();
