/*In object-oriented programming, inheritance is the concept that when a class of objects is defined, 
any subclass that is defined can inherit the definitions of one or more general classes.
This means for the programmer that an object in a subclass need not carry its own definition of data
and methods that are generic to the class (or classes) of which it is a part. This not only speeds up program development;
it also ensures an inherent validity to the defined subclass object (what works and is consistent about the class will also 
work for the subclass).*/

var ClassA = function() {
    this.name = "class A";
}
ClassA.prototype.print = function() {
    console.log(this.name);
}
var a = new ClassA();
a.print();
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};
var ClassB = function() {
    this.name = "class B";
}

inheritsFrom(ClassB, ClassA);
var b = new ClassB();
b.print();
ClassB.prototype.print = function() {
    ClassA.prototype.print.call(this);
    console.log(this.surname);
}

/* Out Put
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node Inheritance.js
class A
class B  */
