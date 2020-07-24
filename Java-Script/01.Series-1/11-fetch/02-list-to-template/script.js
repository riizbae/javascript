

(() => {
    // your code here
    const template = (xMen) => {
        const template = document.getElementById('tpl-hero');
        const hero = document.importNode(template.content, true);
        hero.querySelector('.name').innerText = xMen.name;
        hero.querySelector('.alter-ego').innerText = xMen.alterEgo;
        hero.querySelector('.powers').innerText = xMen.abilities;
        return hero;
    }
    document.getElementById('run').addEventListener('click', async () => {
        const target = document.getElementById('target');
        await  fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
             data.forEach(hero => {
                target.appendChild(template(hero));
            });
        });
    });
})();

