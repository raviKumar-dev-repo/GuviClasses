window.onload = addElement()

function addElement(){
    //create a new div element

    var newDiv = document.createElement('div');
    var newContent = document.createTextNode("Hello , I m JS text")

    //add child node to new div
    newDiv.appendChild( newContent)
    //add this whole element to document
    var currDiv = document.getElementById("div1")

    currDiv.appendChild(newDiv)
}

console.log("addition completed")