
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        document.getElementById(operation);
        let opOne = Number(document.getElementById("op-one").value);
        let opTwo = Number(document.getElementById("op-two").value);
        let result;

        switch (operation) {
            case 'addition':
                result = opOne + opTwo;
                alert("The result is " + result);
                break;
            case 'substraction':
                result = opOne - opTwo;
                alert("The result is " + result);
                break;
            case 'multiplication':
                result = opOne * opTwo;
                alert("The result is " + result);
                break;
            case 'division':
                result = opOne / opTwo;
                alert("The result is " + result);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();