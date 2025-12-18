// DOM - Document Object Model - a tree-like - represent your HTML document
//Javascript uses the DOM to access the HTML element and manipulate them

//Access Method
// 1. select hte element - class, tag, Id
// 2. use the method - getElementById(), getElementsByClassName(), 
// getElementByTagName(), querySelectorAll()

// by id
let firstarticle = document.getElementById('articleone');
console.log(firstarticle);


//by class
let witdetails = document.getElementsByClassName('witdetails')
console.log(witdetails)

//by tag
let wittag = document.getElementsByTagName('article')
console.log(wittag)

//querySelector-select with any selector(class, id, tag)
//return the first element that matches the selector

let secondarticle = document.querySelector('.witdetails');
console.log(secondarticle)


//querySelectorAll - return nodelist of all the element that matches the selector
let thirdarticle = document.querySelectorAll('witdetails');
console.log(thirdarticle)


//DOM Manipulatins - create, update, delete, read element
// firstarticle.innerHTML = `<p>I have changed this from the dom</P><div>this is from dom.js.</div>`

for (let i = 0; i < witdetails.length; i++) {
    if (i == 1){
    witdetails[i].style.backgroundColor = 'blue'}
    else {
    witdetails[i].style.backgroundColor = 'green'}
    console.log(witdetails[i])
} 

for (let i of wittag) {
    i.innerHTML = `I changed this from dom2.js`
}

//events - something happens, click, hover, submit

//events listener - functions that heppens for a particular event

//syntax
// elementfromDOM.addEventListener('event-type', callback)
// elementfromDOM.addEventListener('event-type', ()=>{execution})

let firstaside = document.getElementById('firstaside');
let firstbutton = document.getElementById('firstbtn');
console.log(firstaside, firstbutton)

// firstbutton.addEventListener("click", ()=>{
//     firstaside.innerHTML = `this changed after the click event`
// })

let clicktoseealert = () => {
    alert("you have clicked a button")
}

firstbutton.addEventListener("click", clicktoseealert)

//tickek task
let fullname = document.getElementById("fullname")
let emailAddress = document.getElementById("email")
let preferedsection = document.getElementById("preferedsection")
let address = document.getElementById("address")
let submitbtn = document.getElementById("submitbtn")

submitbtn.addEventListener("click", (event)=>{
    event.preventDefault();
    let fullnamev = fullname.value;
    let emailv= emailAddress.value;
    let preferedsectionv = preferedsection.value;
    let addressv = address.value;
    
        const output = document.getElementById("inputv");

    output.innerHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${fullnamev}</p>
        <p><strong>Email:</strong> ${emailv}</p>
        <p><strong>Section:</strong> ${preferedsectionv}</p>
        <p><strong>Address:</strong> ${addressv}</p>
    `;
})
