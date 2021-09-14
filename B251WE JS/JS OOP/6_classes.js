//Classes concepts were introduced in ES6 

class Book{

constructor(title, author, year){
    this.title = title
    this.author = author
    this.year = year
}

//no need of .prototype in classes
getSummary(){
    return `${this.title} was published on
     ${this.date}, 
     written by ${this.author}`

}
//when you check proto in console its 
//same as wehn we use .prototype

 //static method- no need to instantiate
 static topBookStore(){
     return 'Barnes and Noble'
 }

}

//Instantiate obj
/* const book1 = new Book("BVook one", "John Doe","2013")
console.log(book1) */

//static example
console.log(Book.topBookStore())