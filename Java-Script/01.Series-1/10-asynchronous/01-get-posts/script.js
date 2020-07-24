// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here

    document.getElementById('run').addEventListener('click',(displayPost) => {

        function displayPosts() {
            window.lib.getPosts((error, posts) => {
                posts.forEach(post => console.log(post))
            });
        }
        console.log(displayPost);
    });

})();
