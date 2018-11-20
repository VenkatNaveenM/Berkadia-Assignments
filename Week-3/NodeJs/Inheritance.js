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
