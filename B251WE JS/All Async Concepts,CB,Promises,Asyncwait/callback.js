const posts = [
    { title:"Post one",body:'This is post one' },
    { title:"Post Two",body:"This is post one"}
]

//This function will print title of post data from above json
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
//creates a post //set timeout is used to imitate a hypothetical server here
//doesnt uses callback Its Sync program
function createPostNoCallBack(post){

    setTimeout( () => {
        posts.push(post);
    },2000 )

}

//getPost();
//createPostNoCallBack({title :'Post Three', body:'This is post three'})

//When the above JS is run only the post one and two are visible,
// since the create post function gets called at 2s not 1s..
//so its called late by that time the document is already painted
//In these scenarios only ASYNC PGM comes in to help


//Code with callback 

function createPostWithCallBack(post, callback){

    setTimeout( () => {
        posts.push(post);
        callback()
    },2000 )

}
//The change done is callback in the fn definition 
//and we want to run getPost after the createPost action so its added as one of param for the createPost method
//As you can notice that the definition was expecting a function as param so it was needed 
createPostWithCallBack(
    {title :'Post Three',
     body:'This is post three'}, getPost
     )

//Once the abobe method is run after commenting the previous two,,,,,,you see all post title in document
//AFTER 2 SEC, ie the main fn where callback was definedm, the time set for that was considered



