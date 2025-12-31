/*
REST API
API - Application Programming Interface - communication channel between 2 apps 
    - helps handle the request the request and the response 
REST API - REpresentational State Transfer - a set of rules(guidelines)
         - define the methods and protocols of how data is sent, received and stored
           They communicate over HTTP protocol
Free fake and reliable API for testing and prototyping.
https://jsonplaceholder.typicode.com/
*/

const endpoint = "https://jsonplaceholder.typicode.com/";
const request = fetch(endpoint);
console.log(request)

request
.then(response => response.json())
.then(json => console.log(json))
.catch(e => console.log(e))

async function sentdata() {
    const endpoint = "https://jsonplaceholder.typicode.com/";
    const request = fetch(endpoint);
    console.log(request)
    try {
       const response = await request.json()
       const json = await console.log(json)
    } catch (e) {
        console.log(e)
    } 
}


//task - https://official-joke-api.appspot.com/random_joke, display the setup, punchline, type and the id in a card.

fetch("https://official-joke-api.appspot.com/random_joke")
.then(response =>response.json())
.then (data=>{
    console.log (data)
    const carditem = document.getElementById("card");
    carditem.innerHTML = `<p>id: ${data.id}<br>punchline: ${data.punchline}<br>setup: ${data.setup}</p>`
})


/*
go through the available items
post
comments
albums
photos
todos
users
*/