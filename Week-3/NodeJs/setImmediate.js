/* setImmediate() will execute code at the end of the current event loop cycle. 
This code will execute after any I/O operations in the current event loop and before
 any timers scheduled for the next event loop. This code execution could be thought of 
 as happening "right after this", meaning any code following the setImmediate() function
  call will execute before the setImmediate() function argument.    */


console.log('Before immediate');

setImmediate((arg) => {
  console.log(`Executing immediate: ${arg}`);
}, 'so immediate');

console.log('After immediate');

/*
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node setImmediate.js
Before immediate
After immediate
Executing immediate: so immediate
*/
