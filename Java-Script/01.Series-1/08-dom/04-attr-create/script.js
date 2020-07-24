// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here

    let data = document.getElementById("source").getAttribute("data-image");
    let imgNew = document.createElement('img');
    imgNew.src = data;

    document.getElementById("target").appendChild(imgNew);
    document.getElementById("source").removeAttribute("data-image");

    console.log(data);

})();
