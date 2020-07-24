// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here

    let target = document.getElementById('target');
    let text = target.innerHTML;
    let pos = 0;
    let reverse = false;

    function spanText (position) {
        const span = '<span style="font-size:0.2em">';
        let substr = text.substring(0, position)
            + span + text.substring(position, position + 1) 
            + span + text.substring(position + 1, position + 2)
            + span + text.substring(position + 2, position + 3)
            + span + text.substring(position + 3, position + 4)
            + span + text.substring(position + 4, position + 5)
            + '</span>' + text.substring(position + 5, position + 6)
            + '</span>' + text.substring(position + 6, position + 7)
            + '</span>' + text.substring(position + 7, position + 8)
            + '</span>' + text.substring(position + 8, position + 9)
            + '</span>' + text.substring(position + 9);
        target.innerHTML = substr;
    }

    function wave() {
        spanText(pos);
        if (reverse) {
            pos > 0 ? pos-- : reverse = false;
        } else {
            pos < (text.length - 9) ? pos++ : reverse = true;
        }
    }

    setInterval(wave, 50);

})();
