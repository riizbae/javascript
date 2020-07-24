// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let target = document.getElementById("target");

    let partOne = document.getElementById("part-one");
    let buttonPartOne = document.getElementById("fix-part-one");
    let partOneDataMax = partOne.getAttribute("data-max");
    let partOneDataMin = partOne.getAttribute("data-min");
    let targetOne = partOne.value;
    let dataOne;
    let activeOne = 0;
    buttonState("one");
    



    let partTwo = document.getElementById("fix-part-two");
    let partTwoData = document.getElementById("data-two");




    let partThree = document.getElementById("fix-part-three");
    let partThreeData = document.getElementById("data-three");



    let partFour = document.getElementById("fix-part-four");
    let partFourData = document.getElementById("data-four");
    let startAnim;


    buttonPartOne.addEventListener("click", () => {

        if (activeOne == 0) {
            activeOne = 1;
            
        } else {
            activeOne = 0;
            
        }

        startAnimimation();

    })

    partTwo.addEventListener("click", () => {

        partTwoData = getRandomIntInclusive("1", partTwoData);
        console.log(partTwoData);

    })
    partThree.addEventListener("click", () => {
        partThreeData = getRandomIntInclusive("1", partThreeData);
        console.log(partThreeData);

        addText();

    })
    partFour.addEventListener("click", () => {
        partFourData = getRandomIntInclusive("1", partFourData);
        console.log(partFourData);

        addText();

    })

    function addText() { // UPDATE INNER HTML CALLED BY ANIMATION FUNCTION

        target.innerHTML = `0${dataOne}`;

    }

    function buttonState(which) { // BUTTON STATE
        if (`active${which}` == 1) {
            
        } else {
            buttonPartOne.innerHTML = "START";
        }
    }

    function startAnimimation() { // START ANIMATION

        startAnim = setInterval(buttonOne, 50);
        function buttonOne() {
            
            if (activeOne == 0) {
             
                buttonPartOne.innerHTML = "STOP";
                clearInterval(startAnim);
                
            } else {
                dataOne = getRandomIntInclusive(partOneDataMin, partOneDataMax);
                partOne.value = dataOne;
                addText();
                buttonPartOne.innerHTML = "START";
                
            }
        }

    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();
