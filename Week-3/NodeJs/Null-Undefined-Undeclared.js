/*
UNDEFINED:

It means you are trying to grab the contents of empty container.
*/

var a="Naveen"; // global variable
console.log(a); // prints undefined
(function Doo() {
  var b; // local variable
  console.log(a); // prints undefined
  console.log(b); // prints undefined
})();

/*
Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node Null-Undefined-Undeclared.js
Naveen
Naveen
undefined
-------------------------------------------------------------------
UNDECLARED:

It means you didn’t tell whether the container stores Balls or cookies or some other things.
A variable is undeclared when it does not use the var keyword.
It gets created on the global object (that is, the window), 
thus it operates in a different space as the declared variables.
*/

var declaredVariable = 1;

function scoppedVariables() {
  undeclaredVariable = 1;
  var declaredVariable = 2;
}
scoppedVariables();
console.log('no errors')


/*
Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node Null-Undefined-Undeclared.js
no errors

NULL:

It means the container is empty.
*/

var variable;
if( variable === null ) {
    console.log('variable is null');
  } else {
    console.log('variable is not null');
  }
  
/*
Ouput:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node Null-Undefined-Undeclared.js
variable is not null
*/