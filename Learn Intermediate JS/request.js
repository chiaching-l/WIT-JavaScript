//Request - when you ask for something 

//client - frontend, brower, javascript 
//Server - backend

//Request method - GET(give you information), POST(Sending information), PUT/PATCH(updating information), Delete(remove information)


//Endpoint - url 

//XMLHttpRequest - built-in browser Javascript object, it allow us to make http request.
//Basic Syntax using GET


/* -----------方法一-----------------
const xhr = new XMLHttpRequest();
const url = "https://ipinfo.io/json";

xhr.responseType = 'json'; //其他如text 
xhr.onload = () => {
    console.log(xhr.response)
}
xhr.open("GET", url);
xhr.send();
*/

//-----------方法二-----------------
function get_Data() {
const xhr = new XMLHttpRequest();
const url = "https://ipinfo.io/json";

xhr.responseType = 'json'; //其他如text 
xhr.onload = () => {
    console.log(xhr.response)
}
xhr.open("GET", url);
xhr.send();
}

let databtn = document.getElementById("databtn")

databtn.addEventListener("click", (event)=>{
    get_Data()
})


//fetch，跟上面一樣可以放在function裡面

fetch("https://ipinfo.io/json").then(response => {
    if (response.ok) {
        return response.json()
    }
    }, networkError=>{
        console.log(networkError.message)
    }).then (jsonResponse => {
        console.log(jsonResponse)
})

async function getData3 () {
    try{
        const response = await fetch("https://ipinfo.io/json")
        if(response.ok){
            const jsonResponse3 = await response.json()
            console.log(jsonResponse3)
        }
    }catch(e){
        console.log(e)
    }
}

getData3();

//POST with Async and await 
async function post_data() {
    try{
        const response = await fetch("https://httpbin.org/post",{
            method: "POST",
            body: JSON.stringify({name: "Femi", age: 4})
        });
        if(response.ok){
            const jsonResopnse = await response.json()
            console.log(jsonResopnse)
        }
    }catch (e) {
        console.log(e)
    }

}
post_data();
