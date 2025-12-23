//Error
//JavaScript Error Stack - tells a developert that it detected an error within the code 
// - what type of error it is, description about the error


function sum(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        throw Error ("One or more your inputs was not a number")
    } else {
        return num1 + num2
    }
}

// console.log(sum("one", 2));


//throw and catch error

function myFunction2() {
    console.log(2);
    throw Error ("I have throw an error from fun2")
    console.log(3);
}

function myFunction1() {
    console.log(1);
    try{
        myFunction2();
    } catch(e){
        console.log(e)
    }
    
    console.log(4);
}

console.log(0);
myFunction1();
console.log(5);



