// 06-dom/01-select-one/script.js - 6.1: select by id

(() => {

    // your code here
    var str = document.getElementById("target").innerHTML; 
  var res = str.replace(/Haha, you will never change me!/g, "owned");
  document.getElementById("target").innerHTML = res;

})();
