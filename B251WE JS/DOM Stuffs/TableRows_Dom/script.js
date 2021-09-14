function insertNewRow(){

    let table = document.getElementById("t1");

    let row = document.createElement("tr")
    let cellData1 = document.createElement("td")
    let cellData2 = document.createElement("td")

    cellData1.innerHTML = "New Row Cell 1"
    cellData2.innerHTML = "New Row Cell 2"

    row.appendChild(cellData1)
    row.appendChild(cellData2)

    table.appendChild(row)




}