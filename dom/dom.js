// DOM - Document Object Model - a tree-like - represent your HTML document
//Javascript uses the DOM to access the HTML element and manipulate them

//Access Method
// 1. select hte element - class, tag, Id
// 2. use the method - getElementById(), getElementsByClassName(), 
// getElementByTagName(), querySelectorAll()

// by id
let firstarticle = document.getElementById('articleone');
console.log(firstarticle);

let witdetails = document.getElementsByClassName('witdetails')
console.log(witdetails)