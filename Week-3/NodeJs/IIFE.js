/*
Functions that are executed as soon as they are mounted,
these functions are known as Immediately Invoked Function Expressions or IIFEs
 
 Syntax:
 
 (function (){ 
----Function Logic Here----
})();
 
Different ways we can create a Function Expression:

//Creating Function Expression by assigning to a variable. 
var myFunc = function() { return "Venkat Naveen"; }; 

// Creating Function Expression Using Logical Not. 
!function() { return "Venkat Naveen"; }; 

// Creating Function Expression Using Parentheses. 
(function() { return "Venkat Naveen"; }); 
 
 */
 
 // Regular Function. 
function Greet() 
{ 
    console.log("Welcome to IIFE!"); 
}; 
// Execution of Regular Function. 
Greet(); 
  
// IIFE creation and execution. 
(function() { console.log("Welcome to IIFE!"); })();

/*  Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node IIFE.js
Welcome to IIFE!
Welcome to IIFE!
*/

function myFunc() 
{ 
    console.log("Welcome to"); 
    // This will be executed after executing the previous log. 
    (function() { console.log("IIFE"); })(); 
    console.log("Hi There!"); 
} 
  
// Calling the Function. 
myFunc();

/*  Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node IIFE.js
Welcome to
IIFE
Hi There!
*/

