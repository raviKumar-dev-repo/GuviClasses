var movieData = [
    {
        name: "The Godfather",
        yearOfRelease: 1972,
        duration: {
            hours: 2,
            minutes: 55
        },
        genre: ["Crime", "Drama"],
        ratingInfo: {
            rating: 9.2,
            totalRatings: 1666242
        },
        description: "An organized crime dynasty's aging patriarch" +
            "transfers control of his clandestine empire to his reluctant son",
        director: ["Francis Ford Coppola"],
        writers: ["Mario Puzo", "Francis Ford Coppola"],
        stars: ["Marlon Brando", "Al Pacino", "James Caan"]

    },
    {

        name: "The Godfather II",
        yearOfRelease: 1974,
        duration: {
            hours: 3,
            minutes: 22
        },
        genre: ["Crime", "Drama"],
        ratingInfo: {
            rating: 9.0,
            totalRatings: 1157720
        },
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed" +
            "while his son, Michael, expands and tightens his grip on the family crime syndicate",
        director: ["Francis Ford Coppola"],
        writers: ["Mario Puzo", "Francis Ford Coppola"],
        stars: ["Robert Duvall", "Al Pacino", "Robert De Neiro"]

    }

]

var ul = document.createElement("ul");
movieData.forEach(function(film){

    var li = document.createElement("li")

    
    li.innerText = film.name + "-" + film.yearOfRelease
    ul.appendChild(li)
})

document.body.appendChild(ul)