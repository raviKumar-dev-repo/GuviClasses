function getTextOnClick(){
    document.getElementById('getText').addEventListener("click", getText())

}

function getText(){
    fetch('sample.txt')
    .then((response) =>  response.text())
    .then( (data) => {
        document.getElementById('output').innerHTML = data 
    })
    .catch((err) => console.log(err))
}

function getUsersOnClick(){

    fetch("users.json")
    .then( (res) => res.json())
    .then( (data) => {
         let output = '<h2>Users</h2>'
         data.forEach( (user) => {
            output += `
            <ul> 
                <li> ID: ${user.id} </li>
                <li> Name: ${user.name} </li>
                <li> Email: ${user.email} </li>

            </ul>
            `

         })

         document.getElementById('output').innerHTML = output;
    })
}
    

function getPostsOnClick(){

   
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (res) => res.json())
    .then( (data) => {
         let output = '<h2>Posts</h2>'
         data.forEach( (post) => {
            output += `
            <div>
                <h3> ${post.title} </h3>
                <p>${post.body}</p>
            </div>
            `

         })

         document.getElementById('output').innerHTML = output;
    })
    
}


function addPostsOnSubmit(){

    
    console.log("adding post data")
    let title = document.getElementById("title").value
    let body = document.getElementById("body").value
    console.log(title)

    fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method:'POST',
        headers:{
            "Accept": 'application/json, text/plain, */*',
            "Content-type":'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))


}