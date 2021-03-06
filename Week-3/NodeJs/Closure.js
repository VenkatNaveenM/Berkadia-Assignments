/*
A closure is an inner function that has access to the outer function’s variables in addition to it's own variables and global variables. 
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.
You create a closure by adding a function inside another function.
*/


//JavaScript Closure Example 

function addNumbers(firstNumber, secondNumber) 
{
    var returnValue = "Result is : ";
    // This inner function has access to the outer function's variables & parameters
    function add() 
    {
        return returnValue + (firstNumber + secondNumber);
    }
    return add();
}

var result = addNumbers(10, 20);
document.write(result);

//Output : Result is : 30

//The following code Returns the inner function expression

function addNumbers(firstNumber, secondNumber) 
{
    var returnValue = "Result is : ";
    function add() 
    {
        return returnValue + (firstNumber + secondNumber);
    }
    // We removed the parentheses. This will return the inner function expression without executing it.
    return add;
}

// addFunc will contain add() function (inner function) expression.
var addFunc = addNumbers(10, 20);
// call the addFunc() function and store the return value in result variable
var result = addFunc();

document.write(result);

//Returning and executing the inner function

function addNumbers(firstNumber, secondNumber) 
{
    var returnValue = "Result is : ";
    function add() 
    {
        return returnValue + (firstNumber + secondNumber);
    }
    // We removed the parentheses. This will return the inner function add() expression without executing it.
    return add;
}

// This returns add() function (inner function) definition and executes it. Notice the additonal parentheses.
var result = addNumbers(10, 20)();

document.write(result);
