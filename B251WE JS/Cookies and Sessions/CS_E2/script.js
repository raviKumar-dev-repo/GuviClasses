function getCountryName(){

var dropdown = document.getElementById("list")
var newCountry = document.createElement("option")
newCountry.text = document.getElementById("text").value
dropdown.add(newCountry)

}