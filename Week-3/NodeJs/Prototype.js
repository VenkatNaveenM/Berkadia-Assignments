/*
When a function is created in Java Script, JavaScript engine addsa prototype property to the function.
This prototype property is called Object has a constructor property by default.

Advantages of prototype:

No matter how many objects you create, functions are loaded only once in to the memory.
Allow you to override functions if required.
*/

function Employee(name){
    this.name=name;
    }
Employee.prototype.getName=function(){
    return this.name;
    }
var e1=new Employee("Venkat");
var e2=new Employee("Naveen");
console.log("E1=",e1.getName());
console.log("E2=",e2.getName());

/*
output:

C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node Prototype.js
E1= Venkat
E2= Naveen
*/
