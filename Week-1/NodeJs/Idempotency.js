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