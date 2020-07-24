// 11-fetch/04-add/script.js - 11.4: ajouter un élément

(() => {
    const formOk = () => {
        const name = document.getElementById('hero-name');
        const alterEgo = document.getElementById('hero-alter-ego');
        const abilities = document.getElementById('hero-powers');
    };

const check = (xMen) => {
    let valid = true;
    formOk();

    if (xMen.name.length == 0) {
        valid = false;
        formError('hero-name');
    }

    if (xMen.alterEgo.length == 0) {
        valid = false;
        formError('hero-alter-ego');
    }

    if (xMen.abilities.length == 0) {
        valid = false;
        formError('hero-powers');
    } else {
        xMen.abilities.forEach(e => {
            if (e.length == 0) {
                valid = false;
                formError('hero-powers');
            }
        });

    return valid;
    }
};

document.getElementById('run').addEventListener('click', async () => {
    hero = {};
    hero.name = document.getElementById('hero-name').value;
    hero.alterEgo = document.getElementById('hero-alter-ego').value;
    hero.abilities = document.getElementById('hero-powers').value.split(',');
    

    if (check(hero)) {
        await fetch(`http://localhost:3000/heroes/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hero)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

});
