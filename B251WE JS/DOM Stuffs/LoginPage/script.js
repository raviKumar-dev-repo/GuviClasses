
function checkLoginCredentials(){


    let validUsername = "guvi"
let validPwd = "1234"


let username = document.getElementById("user").value
let pwd = document.getElementById("pwd").value


if(username === validUsername && pwd === validPwd){
    alert ("Credentials Valid")
}
else{
    alert("Invalid Credentials")
}



}

