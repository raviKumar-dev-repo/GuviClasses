var movieDataList = []
function handleSubmit(){

 var movieData = {

name : document.getElementById("name").value,
date: document.getElementById("date").value,
rating: document.getElementById("rating").value 
}

movieDataList.push(movieData)

console.log(movieDataList)
genTable(movieData)


}

function genTable(movieData){
    var table = document.getElementById("mvtable");
    var col = ["name","date","rating"]

 
    //movieDataList.forEach(
       // function(dataRow){
            var tr =  document.createElement("tr");
            for(let i =0; i<3;i++){
                var td = document.createElement("td");
                td.innerHTML = movieData[col[i]]
                tr.appendChild(td)
            }
            table.appendChild(tr)
        //})



    }
