// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', (asyncPosts) => {

        async function asyncPosts() {
            const posts = await window.lib.getPosts();
            posts.forEach(post => {
                console.log(post.title + "\n\n" + post.content + "\n\n" + post.author);
                
            });     
        }
    });
})();
