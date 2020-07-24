// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let target = document.getElementById('target');
    let text = target.innerHTML;
    let pos = 0;

    function displayText() {
        target.innerHTML = text.substring(0, pos);
        let rand = Math.ceil(Math.random()*500)+100;
        pos++;
        pos < (text.length) && setTimeout(displayText, rand);
    }
    
    displayText();

})();
