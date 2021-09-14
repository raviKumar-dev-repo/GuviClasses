const posts = [
    { title:"Post one",body:'This is post one' },
    { title:"Post Two",body:"This is post one"}
]

function getPost() {

    setTimeout( () => {
        let output = ''
        posts.forEach( (post) =>
        {
            output += `<li>${post.title} </li>`
        })

        document.body.innerHTML = output
     

    },1000 )

}

function createPostWithPromise(post){
//resolve used for success and reject if something fails
    return new Promise ( (resolve, reject) =>{

        setTimeout( () => {
            posts.push(post);
    
        const error = false ;
        if(!error){
            resolve()
        }
        else{
            reject('Error Something Went wrong')
        }
        },2000 )

    } )
}

//commented for promises.all example

/* createPostWithPromise({title :'Post Three',
     body:'This is post three'}
     ).then(getPost)
     .catch (err  => console.log(err)) 
*/
    
     //catch statement if error msg to be displayed....can be displayed by setting error variable to true in this example

//This above is the syntax for promises

//Promises.all is used when lets say there are many methods that need to be called so instead of using .then we use .all


const promise1 = Promise.resolve("Hellow there")
const promise2 = 10;
const promise3 = new Promise (
    (resolve, reject ) =>{
        setTimeout(resolve, 2000,"GoodBye")
    }
)

//just example for fetch
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json())
//fetch needs two then, one for format to json, one to get data

Promise.all([promise1,promise2,promise3, promise4]).then(
    (values) => console.log(values)
)