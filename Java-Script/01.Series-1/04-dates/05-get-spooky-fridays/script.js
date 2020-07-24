
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    function friday13In(year){
        let date = new Date();
        let counter = 0;
    
        for(let month = 0; month < 12; month++)
        {
         date.setFullYear(year, month, 13);
            if (date.getDay() === 5)
            {   
                let textMonth;
                switch (String(month)) {
                    case '0' :
                        textMonth = "January";
                        break;
                    case '1' :
                        textMonth = "February";
                        break;
                    case '2' :
                        textMonth = "March";
                        break;
                    case '3' :
                        textMonth = "April";
                        break;
                    case '4' :
                        textMonth = "May";
                        break;
                    case '5' :
                        textMonth = "June";
                        break;
                    case '6' :
                        textMonth = "July";
                        break;
                    case '7' :
                        textMonth = "August";
                        break;
                    case '8' :
                        textMonth = "September";
                        break;
                    case '9' :
                        textMonth = "October";
                        break;
                    case '10' :
                        textMonth = "November";
                        break;
                    case '11' :
                        textMonth = "December";
                        break;
                }
                alert("Friday 13 " + textMonth + " " + year);
                counter++;
            }
        }   
        return counter;
    }
    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        console.log(friday13In(year) + " Friday 13 in " + year);
    });

})();
