var parent = document.getElementById("navBar")
parent.setAttribute("id", "topnavigation")

var element = document.createElement("li")
var textnode = document.createTextNode("Tech we use")

element.appendChild(textnode)
parent.firstElementChild.appendChild(element);
var ul = document.getElementById("topnavigation").firstElementChild;

let first = ul.firstElementChild;
let last = ul.lastElementChild;


document.write(first.firstChild.firstChild.nodeValue + "<br>");
document.write(last.firstChild.nodeValue + "<br>");