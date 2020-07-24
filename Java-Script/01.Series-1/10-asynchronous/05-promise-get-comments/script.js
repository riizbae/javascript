// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', (displayComments);

        function displayComments() {
            const promisePosts = window.lib.getPosts();
            promisePosts.then((posts) => posts.forEach(post => {
                const promiseComments = window.lib.getComments(post.id);
                promiseComments.then((comment) => post.comments = comment);
                console.log(post);
            }));
        }
    });

})();
