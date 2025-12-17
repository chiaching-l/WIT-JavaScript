//single line comment
/* multi line comment
    multi line comment */

// Javascript - a programming language - dynamic behavior on website/apps - 
// - work with html and css
// declare variable, conditionals, array, loop, function, object, scope


//variable declaration

// var -redeclare, reassign
// var favColor = 'yellow';
// var favColor ='red';
// console.log(favColor);

// let - prefer way to declare variable - not allow redeclare, but you can reassign
// let favDay = 'Friday';
// favDay = 'Sunday';  //reassign
// console.log(favDay)

//const - doesn't allow redeclare or reassign - strict
// const pi = 3.14;



//Scope 

//1. globel scope
// let firstName = 'femi' //global scope

//2. function scope
// function studentName () {
//     let surName = 'Ola'; //function scope 
//     let firstName = 'Fatemeh';
//     console.log(firstName);
//     return surName
// }
// studentName()
// console.log(firstName)

//3. Bolck scope {}

// if (firstName == 'femi') {
//     let secondName = 'Thaisa';
//     console.log(secondName);
// }
// console.log(secondName); 這個在區塊外=undefine會跑錯

//var let const
//var - globel scope
//let and const are not globel scope

// function witalumni() {
//     let age = 12;
//     for (let i = 0; i < 4 ; i++) {
//         let luckyNum = age + 4;
//         var unluckyNum = age - 4;
//     }
//     console.log(unluckyNum);
// }

// witalumni();

//data types
// primitive datatype - basic value -number, boolean, string,
// undefined, Null, symbol, bigint
// Non-primitive Datatype - complex data - Object, array, function, map

// let age = 'femi';
// let goals = undefined;

//tempelate literals
// console.log(`The goal for the year is ${goals}`);


// Conditionals and ternary operator
// if (expression) {
//     do this
// } else if(next expression) {
//     do this 
// } else {
//     if everything is false
// }


// function grade(socre){
//     let grade = ""
//     if (socre > 79) {
//         grade = 'A';
//     } else if (socre>69){
//         grade = 'B';
//     }else if (socre>59){
//         grade = 'C';
//     }else if (socre>49){
//         grade = 'D';
//     }else if (socre>39){
//         grade = 'E';
//     } else {
//         grade ='F';
//     }
//     console.log(grade)
// }

// grade(40);


// ternary operator
// condition ? do this : else this ;

// let canDrive = false ;
// canDrive ? console.log('Femi can drive') : console.log('Femi cannot drive');


// Arrays
// const studentArray = ["Thaisa", "Tham", "Jazz", 1, true, null]
// studneArray[0]

//splice and slice 
//splice - add, remove, replace elements
//array.splice(start, deleteCound, replacement items)
// studentArray.splice(2, 1, "Femi")
// console.log(studentArray)


// //function 
// function functName(arg1, arg2) {
//     return
// }
// functName()

// //function expression
// const functionName2 = function(arg) {
//     return
// }
// functionName2()


// //arrow function
// const functName3 = () => {
//     return
// }


// let wit = ['chia', 'femi', 'etin', 'thaisa', 'ola', 'ching']
// let witCurrent = ['chia', 'ching']

// function uni(arr1, arr2) {
//   let result = [];

//   for (let item of arr1) {
//     if (!arr2.includes(item)) {
//       result.push(item);
//     }
//   }

//   for (let item of arr2) {
//     if (!arr1.includes(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }
// uni(wit,witCurrent);

let lightColour = 'green';

lightColour == 'green' ? console.log('Drive!') : console.log('Stop, do not Go!');
