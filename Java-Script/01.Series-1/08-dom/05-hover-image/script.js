// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

        // your code here
        let img = document.querySelector("img");
        let data = document.querySelector("img").getAttribute("data-hover");
        document.querySelector("img").addEventListener("mouseover", () => {
            img.src = data;
        })
        console.log(data);
})();