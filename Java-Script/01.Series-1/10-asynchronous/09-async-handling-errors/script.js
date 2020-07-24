// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        async function asyncPerson() {
            try {
                const persons = await window.lib.getPersons();
                persons.forEach(person => console.log(person.name));
            } catch(error) {
                console.error(error);
            }
        }   
    });
})();
