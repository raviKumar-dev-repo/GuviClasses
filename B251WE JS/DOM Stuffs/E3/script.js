const button = document.querySelector(".button")

// addEventListener executes all events in this block,
// onclick works just once it will do allaction under it one by one

button.addEventListener("click",() =>{

   const text =  document.querySelector(".text")
   let newLi = document.createElement("li");
   newLi.innerHTML = text.value;
    //prepend function add the child node before the first child of parent.
   document.querySelector(".list").prepend(newLi)

})
