
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    var day = document.getElementById('dob-day').value;
    var month = document.getElementById('dob-month').value;
    var year = document.getElementById('dob-year').value; 
    var birth = month +  day  + year;

    function calcAge(dateString) {
        var birth= +new Date(dateString);
        return ~~((Date.now() - birth) / (31557600000));
      }
 
    document.getElementById('run').addEventListener('click', () => {
        alert(calAge(dateString));
    });
})();

    


