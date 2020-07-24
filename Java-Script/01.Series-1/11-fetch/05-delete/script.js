// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', async () => {
        const id = Number(document.getElementById('hero-id').value);
        let dataDeleted;
        if (id > 0) {
            await fetch(`http://localhost:3000/heroes/${id}`)
                .then(response => response.json())
                .then(data => {
                    dataDeleted = data;
                });

            await fetch(`http://localhost:3000/heroes/${id}`, {
                method: 'delete'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(dataDeleted);
                });
        }
    });
})();
