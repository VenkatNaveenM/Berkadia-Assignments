/*
An async function is a modification to the syntax used in writing promises. You can call it syntactic sugar over promises.
 It only makes writing promises easier.

An async function returns a promise -- if the function returns a value, the promise will be resolved with the value, 
but if the async function throws an error,
 the promise is rejected with that value. Let’s see an async function:
*/

async function myRide() {
  return 'This is from async';
}
console.log(myRide())
//and a different function that does the same thing but in promise format:

function yourRide() {
  return Promise.resolve('This is from promise');
}
  console.log(yourRide())
  
/*  OutPut:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node IIFE.js
Promise { 'This is from async' }
Promise { 'This is from promise' }
*/

// when a promise is rejected, an async function is represented like this:

  function foo() {
    return Promise.reject(25)
  }
  
  // is equal to
  async function hoo() {
    throw 25;
  }
  console.log(foo())
  console.log(hoo())
  
 /*  OutPut:
 C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node IIFE.js
Promise { <rejected> 25 }
Promise { <rejected> 25 }
 */
 
 /*
 Await
 Await is only used with an async function.
 The await keyword is used in an async function to ensure that all promises returned in the async function are synchronized,
 ie. they wait for each other. Await eliminates the use of callbacks in .then() and .catch(). In using async and await,
 async is prepended when returning a promise, await is prepended when calling a promise. 
try and catch are also used to get the rejection value of an async function.
 */
 
 async function myDate() {
    try {
  
      let dateDetails = await date;
      let message     = await orderUber(dateDetails);
      console.log(message);
  
    } catch(error) {
      console.log(error.message);
    }
  }

  (async () => { 
    await myDate();
  })();
  
  
   /*  OutPut:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node IIFE.js
date is not defined
 */