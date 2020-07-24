// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here

    document.getElementById("pass-one").addEventListener("input", () => {

        let elementTotrack = document.getElementById("pass-one").value;
        let counter = document.getElementById("counter");
        displayCounter();
        maxCharacter("10");
        function maxCharacter(amount) {

            document.getElementById("pass-one").setAttribute("type", "tel");
            document.getElementById("pass-one").setAttribute("size", amount);
            document.getElementById("pass-one").setAttribute("maxlength", amount);

        }

        function displayCounter() {

            counter.innerHTML = `${elementTotrack.length}/10`;

        }


    })

})();
