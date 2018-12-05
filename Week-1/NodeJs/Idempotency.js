/*
Idempotent Operations for JavaScript Arrays and Objects:


By default, most operations in JavaScript modify the internals of a specific value (object).
Be it by calling sort, push/pop/shift/Unshift, reverse, a custom method that modifies internals,
or something equivalent to obj.property = 'foo; they all modify the internal value.
Modifying values, though, makes for code that is very difficult to reason about. However,
sometimes, it may be necessary to perform similar operations. But, instead of actually executing those operations,
a better alternative is to perform idempotent operations that don't modify the internals of the original value.
The modification of those values are then returned as an entirely new object, leaving the original intact.
You can do so with Array.prototype.slice or Object.assign. But using Array.prototype.slice and
Object.assign results in more verbose code.
Fortunately, this is where idempotent comes in.
Idempotent provides a non-destructive analog of the aforementioned operations, and more.
*/

var idempotent = require('idempotent');
 
var push = idempotent.push;
var pop = idempotent.pop;
var shift = idempotent.shift;
var unshift = idempotent.unshift;
 
var arr1 = [];
 
var arr2 = push(arr1, 1);
var arr3 = push(arr2, 2);
 
console.log(arr1);
console.log(arr2);
console.log(arr3);

/*
Output:

C:\Users\Venkat Naveen\Berkadia\Week 1>node idempotency.js
[]
[ 1 ]
[ 1, 2 ]

*/