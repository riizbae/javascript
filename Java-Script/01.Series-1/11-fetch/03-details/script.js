// 11-fetch/03-details/script.js - 11.3: details


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
        const id = Number(document.getElementById('hero-id').value);
        await fetch(`http://localhost:3000/heroes/${id}`)
            .then(response => response.json())
            .then(data => {
                while (target.firstChild)
                    target.removeChild(target.firstChild);

                if (data.id === id)
                    target.appendChild(template(data));
            });

        
    });
})();
