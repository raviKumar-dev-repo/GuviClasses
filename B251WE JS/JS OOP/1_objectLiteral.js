//The below example is for ES5 only classes concept was intoduced in ES6


//Object Literals

const book1 = {

    title:"Book 1",
    author:"Jon Doe",
    date:"2013",
    getSummary : function() {
        return `${this.title} was published on ${this.date}, written by ${this.author}`
    }
}

const book2 = {

    title:"Book 2",
    author:"Jane Doe",
    date:"2015",
    getSummary : function() {
        return `${this.title} was published on ${this.date}, written by ${this.author}`
    }
}

console.log(book1.getSummary())
console.log(book2.getSummary())
console.log("Using Object Class \n")
console.log(Object.values(book2))
console.log(Object.keys(book2))

//Defining objects like this is tiresome and thats the reason constructor is used, which is in next js file
