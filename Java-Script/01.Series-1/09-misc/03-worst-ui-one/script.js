// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here

    document.getElementById("slider").addEventListener("change",  () => {
        let sliderValue = document.getElementById("slider").value;
        let target = document.getElementById("target");
        target.innerHTML = `0${sliderValue}`;
        alert(sliderValue);
    })

})();
