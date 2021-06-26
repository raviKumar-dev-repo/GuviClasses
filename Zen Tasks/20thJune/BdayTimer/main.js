var div = document.getElementById("div");

var para = document.createElement("h1");
para.innerText = "3";
para.classList.add("para")

let countArr = [];
let timeArr = [];

for(let i = 10; i>=1; i--){

   countArr.push(i);

}
console.log(countArr)

for(let j = 1; j<=10;j++){
   timeArr.push(j *1000);

}
console.log(timeArr)

for(let i =0; i<10;i++){

   setTimeout(function(){

         para.innerText = countArr[i];
        console.log(para.innerText)
    }, timeArr[i]);


   }
   
setTimeout(function(){
   para.innerText = "Your Birthday Is Here";
   console.log(para.innerText)
}, 10500);
   
// }
    // setTimeout(function(){

    //     para.innerText = i;
    //     console.log(para.innerText)
    // }, 1000*j)

div.appendChild(para);
