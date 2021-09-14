function changeCSS(){
    var stored = document.getElementsByTagName('p')

    var i ;

    for(i= 0 ; i<stored.length;i++){
        stored[i].style.color = "darkblue"
        stored[i].style.fontStyle = "italic"

        console.log("CSS Changed for p tag")
    }

}