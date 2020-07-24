// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here

    let target = document.getElementById("target");

    let partOne = document.getElementById("part-one");
    let partOneData = partOne.getAttribute("data-min");
    partOneData = 461;
    partOne.innerHTML = partOneData;

    let partTwo = document.getElementById("part-two");
    let partTwoData = document.getElementById("data-two");
    partTwoData = 01;
    partTwo.innerHTML = partTwoData;


    let partThree = document.getElementById("part-three");
    let partThreeData = document.getElementById("data-three");
    partThreeData = 01;
    partThree.innerHTML = partThreeData;

    let partFour = document.getElementById("part-four");
    let partFourData = document.getElementById("data-four");
    partFourData = 01;
    partFour.innerHTML = partFourData;

    document.getElementById("part-one").addEventListener("click", () => {
        partOneData++;
        console.log(partOneData);
        partOne.innerHTML = partOneData;
        addText();

    })

    document.getElementById("part-two").addEventListener("click", () => {
        partTwoData++;
        console.log(partTwoData);
        partTwo.innerHTML = partTwoData;
        addText();

    })
    document.getElementById("part-three").addEventListener("click", () => {
        partThreeData++;
        console.log(partThreeData);
        partThree.innerHTML = partThreeData;
        addText();

    })
    document.getElementById("part-four").addEventListener("click", () => {
        partFourData++;
        console.log(partFourData);
        partFour.innerHTML = partFourData;
        addText();

    })

    function addText() {
        
        target.innerHTML = `0${partOneData - 1}${partTwoData - 1}${partThreeData - 1}${partFourData - 1}`;
   
    }


})();
