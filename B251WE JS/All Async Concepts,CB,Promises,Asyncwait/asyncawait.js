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
//resolve usd for success and reject if something fails
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

//async await example here
//just usage of async keyword
async function init () {

    await createPostWithPromise({title :'Post Three',
    body:'This is post three'})
    getPost()
}

init()
//async await is much more elegant way to do async programming
 
//ASYNC AWAIT with FETCH

async function fetchUsers(){
const res = await fetch('https://jsonplaceholder.typicode.com/users')

const data = await res.json()
console.log(data)
}

fetchUsers()
