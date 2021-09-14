
const page = document.querySelector(".container")
page.addEventListener("click",() =>{
    let clickText = "Clicked ";
    let newLine = document.createElement("br");
    document.querySelector(".container").prepend(clickText)
    document.querySelector(".container").prepend(newLine)


})
