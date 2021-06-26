var movieDataList = []
var currRow

function handleSubmit() {

    var movieData = {

        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        rating: document.getElementById("rating").value
    }

    movieDataList.push(movieData)

    console.log(movieDataList)
    genTable(movieData)


}

function genTable(movieData) {
    var table = document.getElementById("mvtable");
    var col = ["name", "date", "rating"]


    //movieDataList.forEach(
    // function(dataRow){
    var tr = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        td = document.createElement("td");
        td.innerHTML = movieData[col[i]]
        tr.appendChild(td)
    }
    table.appendChild(tr)
    activateButtons()

}

var table = document.getElementById("mvtable");

function activateButtons() {
    if (table.rows.length > 1) {

        console.log("Enabling Buttons");
        document.getElementById('editBtn').disabled = false;
        document.getElementById('editBtn').style.backgroundColor = "blue";

        document.getElementById('dltBtn').disabled = false;
        document.getElementById('dltBtn').style.backgroundColor = "blue";

    }
}

function editRow() {

    console.log("Entered Editing Mode")
    var form = document.getElementById("form")




    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {

        var cell = cells[i];
        cell.onclick = function () {

            var rowId = this.parentNode.rowIndex;
            var rowSelected = table.getElementsByTagName('tr')[rowId];


            var form = document.getElementById("form")
            form.name.value = rowSelected.cells[0].innerHTML
            form.date.value = rowSelected.cells[1].innerHTML
            form.rating.value = rowSelected.cells[2].innerHTML

            document.getElementById('submitBtn').disabled = true;
            document.getElementById('submitBtn').style.backgroundColor = "lightblue";

            document.getElementById('updateBtn').disabled = false;
            document.getElementById('updateBtn').style.backgroundColor = "blue";
            table.deleteRow(rowId);

        }

    }

}

function deleteRow() {


    console.log("Entered Deleting Mode")

    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {

        var cell = cells[i];
        cell.onclick = function () {

            var rowId = this.parentNode.rowIndex;
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            table.deleteRow(rowId);
            console.log("Deleted Row : " + rowSelected.innerHTML);

        }

    }


}