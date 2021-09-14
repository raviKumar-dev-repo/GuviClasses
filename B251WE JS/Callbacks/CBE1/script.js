//named callback example
function getpizza(para1, para2, callback) {
    console.log("Eating pizza  " + para1 + " " + para2)
    callback();
}


getpizza('cheese', 'cornflakes', function () {

    console.log("Pizza finished")

})

//Two function in one
function myfunc1(callback) {
    console.log("My func 1 complete  here, call function 2")
    callback()

}

function myfunc2() {
    console.log("My func 2 starts here")
}
myfunc1(myfunc2)


//Anonymous Callback
// var fun1 = setTimeout(function() {  
//     console.log("This message is shown after 2 seconds");
// }, 2000);

// var fun2 = setTimeout(function() {  
//     console.log("This message is shown after 1 seconds");
// }, 1000);


// function print(callback){
//     callback(fun1, fun2)
// }
//TBD


//Sum Callback Example- Named Callback
function getsum(p1, p2, p3, getSumAfter) {

    let res = p1 + p2 + p3
    getSumAfter(res)
}

getsum(10, 20, 30, function (total) {
    console.log(total)
    console.log(total + 5)
    console.log(total / 5)

})


//merge callback example

function mergeData(arr, )