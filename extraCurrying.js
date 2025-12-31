//Currying -

function calc (a, b, c ,d) {
    return a*b*c*d
}
// console.log(calc(1, 3, 4))

function curriedcalc(a) {
    return function(b){
        return function(c){
            return function (d){
                return a*b*c*d
            }
        }
    }
}

console.log(curriedcalc (1, 3, 4))

/*
Memory management - allocates, use memory, elease memory
How does it store memory?
Stack memory - stores primitive value (number, boolean, string)
Function call - fast and short-lived 

    let firstname = "Femi"
    let lastname = 'Ola'

Heap memory - stores object, arrays, functions, not as fast*/

    let studentData = {
        firstname: 'Femi',
        age: 5
    }

    let newStudentData = studentData;
    newStudentData.firstname = 'Ching'; //這裡把上面的firstname改了
    console.log(studentData);

    studentData = null;
    newStudentData = null;
    console.log(studentData);
    console.log(newStudentData);


/*
Event looping
Javascript - single-threaded - one thing at a time 
call stack - LIFO(last in first out) - where your func are executed 
Task queue - async operation come to wait 
*/

console.log("This will print first")
var a = "Zero"

setTimeout(()=>{
    a = "One"
}, 5000)


console.log(a)


//Design patterns 
