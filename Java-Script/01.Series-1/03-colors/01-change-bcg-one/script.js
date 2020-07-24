
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {
    document.getElementById('red').addEventListener('click', () => {
        document.documentElement.style.backgroundColor = 'red';
    });
    document.getElementById('green').addEventListener('click', () => {
        document.documentElement.style.backgroundColor = 'green';
    });
    document.getElementById('yellow').addEventListener('click', () => {
        document.documentElement.style.backgroundColor = 'yellow';
    });
    document.getElementById('blue').addEventListener('click', () => {
        document.documentElement.style.backgroundColor = 'blue';
    });
})();

