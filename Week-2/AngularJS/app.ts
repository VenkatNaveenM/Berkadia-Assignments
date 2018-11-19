class Student{
    FirstName:string;
    LastName:string;
    RollNumber:number;
    Section:string;
   
     constructor(firstName:string, lastName: string, rollNumber: number, section: string){
                this.FirstName=firstName;
                this.LastName=lastName;
                this.RollNumber=rollNumber;
                this.Section=section;
            }
}
var naveen=new Student("Naveen","Medarametla",2210315762,"A");
var john = new Student("John", "Smith",2210315762,"B");
var jane = new Student("Jane", "Doe",2210315762,"C");
var emily = new Student("Emily", "Jones",2210315762,"D");
console.table([naveen,john, jane, emily]);