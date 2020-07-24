// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        async function displayComments() {
            const posts = await window.lib.getPosts();
            posts.forEach(async (post) => {
                const comments = await window.lib.getComments(post.id);
                post.comments = comments;
                
            });
            console.log(post);
        }
        
    });
})();
