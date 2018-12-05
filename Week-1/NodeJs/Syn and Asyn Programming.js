/*
A synchronous operation blocks a process till the operation completes.
*/

//Synchronous
var result =console.log(10+20);
console.log("Sum finished");
console.log("Next line");

/*
Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main
application thread and notifies the calling thread of its completion, failure or progress.
*/

//Asynchronous (doesn't block) 
function Result() {
    console.log("Inside Functionof Async")
}
setTimeout(() => Result(), 500);
console.log("Outside Functionof Async");

/*
Output:
C:\Users\Venkat Naveen\Berkadia\Week 1>node SynandAsync.js
30
Sum finished
Next line
Outside Functionof Async
Inside Functionof Async
*/