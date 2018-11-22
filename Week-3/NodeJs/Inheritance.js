/*
Object oriented languages support inheritance.
Since Java script is also a object oriented programming language, it supports inheritance.
In Object oriented programming languages like C#  and Java to implement inheritance, a class inherits from another class.
In Java script we don't have concept of classes, so inheritance in Java script is prototype based.
This means implementing inheritance in Java script is object inherits from another object.
*/

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
