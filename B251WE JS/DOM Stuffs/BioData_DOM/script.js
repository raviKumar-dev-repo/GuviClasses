document.body.style.fontFamily = "Times New Roman, Times, serif";
document.getElementById("adhar").innerHTML = "XXXXX";
document.getElementById("name").innerHTML = "Lavish";
document.getElementById("age").innerHTML = "10";
document.getElementById("email").innerHTML = "XXXXX";
document.getElementById("company").innerHTML = "XYZ COmapny";
document.getElementById("contact").innerHTML = "12345";

var element = document.getElementsByTagName("li");

// Iterate through each li and change the class to "listitem".
for (let i = 0; i < element.length; i++) {
  element[i].className = "listitem";
}
//create a new image element and set it to image source url and append the image element to your page
var imgelement = document.createElement("img");
imgelement.src =
  "https://tse2.mm.bing.net/th?id=OIP.RGlqtc5PUWkELfoDzc8dLQHaHQ&pid=Api&P=0&w=189&h=186";

document.body.appendChild(imgelement);