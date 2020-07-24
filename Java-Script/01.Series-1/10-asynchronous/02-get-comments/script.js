// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    document.getElementById('run').addEventListener('click', displayComment);

    function displayComment() {
        window.lib.getPosts((error, articles) => {
            articles.forEach(article => {
                window.lib.getComments(article.id, (error, artComments) => {
                    article.comments = [];
                    artComments.forEach(comment => {
                        article.comments.push(comment);
                    })
                })
                console.log(article);
            })
        });
    }

})();
