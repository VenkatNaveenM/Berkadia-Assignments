/* setInterval() can be used to execute that code. 
setInterval() takes a function argument that will run an infinite 
number of times with a given millisecond delay as the second argument. 
Just like setTimeout(), additional arguments can be added beyond the delay, 
and these will be passed on to the function call. Also like setTimeout(),
 the delay cannot be guaranteed because of operations that may hold on to the event loop, 
 and therefore should be treated as an approximate delay. */

 
function intervalFunc() {
  console.log('Cant stop me now!');
}
setInterval(intervalFunc, 1500);

C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node setInterval.js
Cant stop me now!
Cant stop me now!
Cant stop me now!
Cant stop me now!
Cant stop me now!
Cant stop me now!
^C