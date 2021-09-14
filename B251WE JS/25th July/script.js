
var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    
    var data = JSON.parse(this.response);

    //1
    let casia = data.filter( ele  =>ele.region === 'Asia')
    console.log(casia);

    //2.
    let lessThan2LkhPopln = data.filter(

        ele => ele.population<200000
    );
    console.log(lessThan2LkhPopln);

    //4.
    let totalPop = data.reduce(
        (sum, currEle) => sum+currEle.population,0 
    );
    console.log(totalPop)

    //3.
    let cusd = data.filter(
        (ele) => {
            for(i in ele.currencies){
                if(ele.currencies[i].code === 'USD'){
                    return true;
                }
            }
        }
    );
    console.log(cusd);

}
