const promiseobj = new Promise((resolve,reject) =>{

    const add = () => 10+20
    if(add() == 30){
        resolve("fulfilled")
        console.log("fulfilled")

    }

    else{
        reject("Error")

    }

})