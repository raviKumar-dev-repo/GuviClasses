console.log("Prototype Methods Example")

function Book(title, author, year){

    this.title = title
    this.author = author
    this.year =year

}

Book.prototype.getSummary = function(){
    return `${this.title} was published on ${this.date}, written by ${this.author}`

}

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
}

//Update year of book
Book.prototype.revise = function(newYear){

    this.year= newYear
    this.revised = true

}

const book1 =new Book("Book1", "John","2013")
const book2 = new Book("Book2", "Jane","2016")

console.log(book2)
console.log("Now getSummary is stored in proto")
console.log(book2.getSummary())
console.log(book2.getAge())
book2.revise(2020)
console.log(book2)

//So it means we want title, author, year for all objects, but getSummary for some objects only

