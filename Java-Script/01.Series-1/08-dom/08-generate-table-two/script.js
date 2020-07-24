// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here

    function generate_table(amount) {
      
        let body = document.getElementsByTagName("main")[0];
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");

        body.appendChild(tbl); // add table to the ref element
        tbl.appendChild(tblBody); // add tbody to the table
        tbl.setAttribute("border", "2"); // add border to the table

        for (let i = 1; i < amount + 1; i++) {
      
          let row = document.createElement("tr"); // create row element
          tblBody.appendChild(row); // add row to the tbody

          for (let j = 1; j < amount + 1; j++) {
         
            let cell = document.createElement("td"); // create cell element
            let cellText = document.createTextNode(`${i * j}`); // create cell text
            cell.appendChild(cellText); // add cell text to the cell
            row.appendChild(cell); // add cell to the end of the row
          }
          
        }
       
      }

      generate_table(10);

})();
