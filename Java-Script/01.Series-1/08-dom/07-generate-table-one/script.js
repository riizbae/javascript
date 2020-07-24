// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    // your code here

    let target = document.getElementById("target");
    let createTable = document.createElement("table");
    let createTr = document.createElement("tr");
    let createTh = document.createElement("th");

    document.getElementById("target").appendChild(createTable);
    document.querySelector("table").appendChild(createTr);
    document.querySelector("tr").appendChild(createTh);
   
    function addRow(tableID) {
        // Get a reference to the table
        let tableRef = document.querySelector(tableID);
      
        // Insert a row at the end of the table
        let newRow = tableRef.insertRow(-1);
      
        // Insert a cell in the row at index 0
        let newCell = newRow.insertCell(0);
      
        // Append a text node to the cell
        
      }

    function generateRow(amount) { // Function that generate x amount of row
        for (let i = 0; i < amount; i++) {
            addRow('table');
            
        }
    }

    generateRow(10);


})();
