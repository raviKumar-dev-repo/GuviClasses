//basic cobnstructor 
/* console.log("Basic Constructpor Example")

function Book(){
    console.log("Book Object Initialized")
}

const book1 = new Book()
const book2 = new Book()
 */

//Paramterized constructor
console.log("Parametrised Constructor Example")
function Book(title, author, year){

    this.title = title
    this.author = author
    this.year =year

    this.getSummary = function(){
        return `${this.title} was published on ${this.date}, written by ${this.author}`

    }
}

const book1 =new Book("Book1", "John","2013")
const book2 = new Book("Book2", "Jane","2016")

console.log(book1)
console.log(book2.getSummary())

//instead of putting a method directly into cinstructor we can use the concept of prototype, \
//which gives you better flexibilty between multiple object, if say just one object want to call method
//but second doesnt so PROTOTYPE is used....in the next JS file


