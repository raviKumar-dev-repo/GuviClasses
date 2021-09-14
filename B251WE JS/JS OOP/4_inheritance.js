console.log("Inheritance Example")

function Book(title, author, year){

    this.title = title
    this.author = author
    this.year =year

}

Book.prototype.getSummary = function(){
    return `${this.title} was published on ${this.year}, written by ${this.author}`

}

function Magazine(title, author, year,month) {

    Book.call(this,title,author,year)
    this.month = month

}
//Tagged #PI
Magazine.prototype = Object.create(Book.prototype)


//Instantiate Magazine obj

const mag1 = new Magazine("Mag 1", "John","2018","feb")
// console.log(mag1)
// //if we do getSummay from Magazine we get error....getSummary is not a function
// console.log(mag1.getSummary())

//So we do this--- on TAG #PI
//Inherit prototype
console.log(mag1.getSummary())

//If we check proto object its still uses Book Constructor not maagzine one

//Use magazine costructr
Magazine.prototype.constructor =  Magazine;
console.log(mag1)


