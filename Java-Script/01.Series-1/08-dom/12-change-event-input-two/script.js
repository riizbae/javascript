// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener("input", () => {

        let elementTotrack = document.getElementById("pass-one").value;
        let validity = document.getElementById("validity");

        displayValidity();
        console.log(elementTotrack.length);
        function minimumCharacter(amount) {

            document.getElementById("pass-one").setAttribute("type", "tel");
            document.getElementById("pass-one").setAttribute("size", amount);
            document.getElementById("pass-one").setAttribute("maxlength", amount);

        }

        function displayValidity() {

            if (elementTotrack.length > 8 && hasNumber(elementTotrack) == true) {
                validity.innerHTML = `Ok`;
            } else {
                validity.innerHTML = `Not ok`;
            }


        }

        function hasNumber(myString) {
            return /\d/.test(myString);
        }


    })

})();
