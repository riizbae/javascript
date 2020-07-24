// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', displayPerson);

    function displayPerson() {
        window.lib.getPersons((error, persons) => {
            error === null ? persons.forEach(person => console.log(person)) : console.error(error);
        });
    }
})();
