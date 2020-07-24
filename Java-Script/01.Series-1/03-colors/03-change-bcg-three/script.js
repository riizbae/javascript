
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    
    document.getElementById('run').addEventListener('click', () => {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            let m = '#' + n.slice(0, 6);
            document.documentElement.style.backgroundColor = m;
    
    });

})();
