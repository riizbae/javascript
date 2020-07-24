//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here

    class Personne {
        username(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }

    const user = {
        firestname = 'Brigitte',
        lastname = 'Bardot', 

        sayHello() {
            return `Hello ${lastnam} ${firstname}`;
        }
    }

    document.getElementById("run").addEventListener("click", function(){
        alert(sayHello());
      });
})();
