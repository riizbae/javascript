
// 02-maths/01-calculator-one/script.js - 2.1: calculator1




(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function(event) {
        let result = Number(document.getElementById("op-one").value) + Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });

    document.getElementById("substraction").addEventListener("click", function(event) {
        let result = Number(document.getElementById("op-one").value) - Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });

    document.getElementById("multiplication").addEventListener("click", function(event) {
        let result = Number(document.getElementById("op-one").value) * Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });

    document.getElementById("division").addEventListener("click", function(event) {
        let result = Number(document.getElementById("op-one").value) / Number(document.getElementById("op-two").value);
        alert("The result is " + result);
    });
})();


