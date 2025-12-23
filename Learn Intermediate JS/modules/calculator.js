//create a calculator - add, subtract, multiply, divide using modules
function calculator(num1, num2, fun = "add") {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "please enter two numbers";
    }

    switch (fun) {
        case "add":
        case "+":
            return num1 + num2;

        case "subtract":
        case "-":
            return num1 - num2;

        case "multiply":
        case "*":
            return num1 * num2;

        case "divide":
        case "/":
            if (num2 === 0) {
                return "cannot divide by zero";
            }
            return num1 / num2;

        default:
            return "please enter a valid operation (+, -, *, /)";
    }
}
module.exports = {calculator};


