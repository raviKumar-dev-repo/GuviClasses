console.log("Object Create Example")

//Object of protos

const bookProtos ={
    getSummary : function (){
        return `${this.title} was published
         on ${this.date}, 
         written by ${this.author}`

    },

    getAge : function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`

    }
}

//Create the object - TWO WAYS
/* const book1 = Object.create(bookProtos)
book1.title = "Book One"
book1.author = "John Doe"
book1.date = "2015"
console.log(book1) */

//Way TWO
const book1 = Object.create(bookProtos,{

     title:{value:"Book One"},
     author:{value:"Book One"},
     date:{value:"Book One"}
})
console.log(book1)

