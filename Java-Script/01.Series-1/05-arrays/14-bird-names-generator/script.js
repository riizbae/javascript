// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let phrase;

        Set.prototype.getByIndex = function (index) { return [...this][index]; } // Customized function to get index of Set.

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        function generatePhrase() {
            let randomBird = getRandomInt(birds.length - 1);
            let randomAdjectives = getRandomInt(adjectives.size);

            if (birds[randomBird].fem == true) {
                phrase = `La ${birds[randomBird].name} ${adjectives.getByIndex(randomAdjectives)}e`;
    
            } else {
                phrase = `Le ${birds[randomBird].name} ${adjectives.getByIndex(randomAdjectives)}`;
         
            }
            return phrase;
        }

        document.getElementById("target").innerHTML = generatePhrase();
    });
  
})();




