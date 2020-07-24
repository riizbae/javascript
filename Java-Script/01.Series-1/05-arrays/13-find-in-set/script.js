// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here

    document.getElementById('run').addEventListener('click', () => {
        console.log(people.size);
        people.has('Alexandre') ? console.log('There is an Alexandre.') : console.log('404 Alexandre not found');
    });
})();
