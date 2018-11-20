/*setTimeout() can be used to schedule code execution 
 after a designated amount of milliseconds.
 This function is similar to window.setTimeout() 
 from the browser JavaScript API, however a string of 
 code cannot be passed to be executed.

*/


function myFunc(arg) {
    console.log(`This is going to Execute after=> ${arg}`);
  }
  
  setTimeout(myFunc, 1500, '1.5 seconds');

C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node setTimeout.js
This is going to Execute after=> 1.5 seconds