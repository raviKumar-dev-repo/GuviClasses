
function replaceChildEle() {
    var newPara = document.createElement('p')
    var newText =  document.createTextNode("This is new text for para")
    newPara.appendChild(newText)
    
    var parentDiv = document.getElementById("div1");
    var childPara = document.getElementById("p1")
    parentDiv.replaceChild(newPara,childPara)

    console.log("Child is replaced")

    document.getElementById("b1").disabled = true;
}
    


function removeChildEle() {

    var parentDiv = document.getElementById("div1");
    var childPara = document.getElementById("p2")
    parentDiv.removeChild(childPara)

    console.log("Child is removed")

    document.getElementById("b2").disabled = true;

}


