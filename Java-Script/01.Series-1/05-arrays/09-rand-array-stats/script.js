// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    document.getElementById('run').addEventListener('click', () => {
        let arr = [];
        let min = 101;
        let max = 0;
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            arr[i] = Math.ceil(Math.random() * 100);
            document.getElementById('n-' + (i+1)).innerHTML = arr[i];
            arr[i] < min && (min = arr[i]);
            arr[i] > max && (max = arr[i]);
            sum = sum + arr[i];        
        }
        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = Math.round(sum/10, 10);
    });

})();
