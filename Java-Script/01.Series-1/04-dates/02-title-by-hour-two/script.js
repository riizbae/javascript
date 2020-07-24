
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    if (h < 17) {
        document.getElementById('target').innerHTML = 'Hello';
    } else if (h > 17) {
        document.getElementById('target').innerHTML = 'Good evening';
    } else if (m < 30) {
        document.getElementById('target').innerHTML = 'You have to work';
    } else {
        document.getElementById('target').innerHTML = 'Good evening';
    }
    
})();
