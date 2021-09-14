class Book{

    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
    
    getSummary(){
        return `${this.title} was published on
         ${this.year}, 
         written by ${this.author}`
    
    }
}

class Magazine extends Book {

    constructor(title, author, year, month){
        super(title,author,year)
        this.month = month


    }


}

//Instantiate
const mag1 = new Magazine("t1","JD1","2018","Feb")

console.log(mag1.getSummary())