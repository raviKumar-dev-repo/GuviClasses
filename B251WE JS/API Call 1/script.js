//1. Create an XHR Object for request creation
var req = new XMLHttpRequest();
//2. Open a connection
req.open('GET', 'https://restcountries.eu/rest/v2/all',true);
//3.Send the connection
req.send();
//4. Once data is recieved, have to convert data using onload fn
req.onload = function(){
    // this means freshly coming response you can also mention req.response
    // which says response for request named res
    var data = JSON.parse(this.response);

    data.forEach(element => {
        console.log(element.flag);
        
    });
    //console.log(data);
}
