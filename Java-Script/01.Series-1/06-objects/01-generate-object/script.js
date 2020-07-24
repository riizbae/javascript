// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
     const my = {
        lastname : "Limage",
        firstname : "Aurore",
        age : "34",
        city : "Belgium",
        country : "Belgium"
    };

    document.getElementById('run').addEventListener('click', () => {
        console.log("Hello, my name is " + mys.firstname + " " + my.lastname +".\nI\'m " + my.age + " years old and I live in " + mys.city + ", " + my.country + ".");
    });
})();


