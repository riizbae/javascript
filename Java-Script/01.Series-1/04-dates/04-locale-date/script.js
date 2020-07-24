
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute : 'numeric' };
    

    
    
    document.getElementById('target').innerHTML = date.toLocaleDateString("en-US", options);

})();
