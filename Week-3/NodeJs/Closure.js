/* A closure is the combination of a function and the lexical environment
 within which that function was declared.*/


function init() {
    var name = 'Venkat Naveen';
    function displayName() {
      console.log(name);    
    }
    displayName();    
  }
  init();

C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node Closure.js
Venkat Naveen