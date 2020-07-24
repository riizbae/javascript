// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here

    let btn = document.getElementById('increment');
    let target = document.getElementById('target');
    localStorage.getItem('caugm') === null && localStorage.setItem('caugm', 0);
    target.innerHTML = localStorage.getItem('caugm');

    function incLocal() {
        let x = parseInt(localStorage.getItem('caugm'), 10) + 1;
        localStorage.setItem('caugm', x);
        target.innerHTML = x;
    }

    btn.addEventListener('click', incLocal);

})();
