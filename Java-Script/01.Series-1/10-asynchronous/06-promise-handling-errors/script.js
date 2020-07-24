// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', (displayPerson) => {

        function displayPerson() {
            const promisePersons = window.lib.getPersons();
            promisePersons.then(
                (persons) => {persons.forEach(person => console.log(person.name))}, 
                (error) => {console.error(error)}
            );
        }
    });
})();
