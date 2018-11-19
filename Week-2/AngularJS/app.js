var Student = /** @class */ (function () {
    function Student(firstName, lastName, rollNumber, section) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.RollNumber = rollNumber;
        this.Section = section;
    }
    return Student;
}());
var naveen = new Student("Naveen", "Medarametla", 2210315762, "A");
var john = new Student("John", "Smith", 2210315762, "B");
var jane = new Student("Jane", "Doe", 2210315762, "C");
var emily = new Student("Emily", "Jones", 2210315762, "D");
console.table([naveen, john, jane, emily]);