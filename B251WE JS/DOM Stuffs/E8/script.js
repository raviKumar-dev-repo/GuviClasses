
//select all ul and li elements using querySelectorAll
let  ul_li_elements = document.querySelectorAll("ul li")
console.log(ul_li_elements)

//select all ul li with items
let liItemElements =  document.querySelectorAll("ul li.items")
console.log(liItemElements)

//set color of last li elements
ul_li_elements[ul_li_elements.length - 1].style.color = "Red"

//set tehe text of last element 
ul_li_elements[ul_li_elements.length - 1].innerHTML= "Your text here"


