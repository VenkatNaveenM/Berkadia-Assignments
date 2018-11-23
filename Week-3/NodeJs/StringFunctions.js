/*
The String object lets you work with a series of characters;
 it wraps Java script string primitive data type with a number of helper methods.
 
 Syntax:
 
 var val = new String(string);
 
 
 Properties of string:
 
 Constructor:
 
 A constructor returns a reference to the string function that created the instance's prototype.  */
 
 var str = new String( "Venkat Naveen" );
console.log("str.constructor is:" + str.constructor);
 
 /*
 output:
 C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node StringFunctions.js
str.constructor is:function String() { [native code] }


 Length:
 
 Returns number of characters in a string
 */

 var str = new String( "Venkat Naveen" );
console.log("str.length is:" + str.length);

/*
Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node StringFunctions.js
str.length is:13

Prototype:

The prototype property allows you to add properties and methods to any object (Number, Boolean, String and Date etc.).
Prototype is a global property which is available with almost all the objects.
*/

function book(title, author){
    this.title = title; 
    this.author  = author;
 }
 var myBook = new book("NodeJs", "Naveen");
 book.prototype.price = null;
 myBook.price = 1000;
console.log("Book title is : " + myBook.title);
console.log("Book author is : " + myBook.author);
console.log("Book price is : " + myBook.price);

/*
Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node StringFunctions.js
Book title is : NodeJs
Book author is : Naveen
Book price is : 1000
*/
---------------------------------------------------------------------------------------------------------------------

//    String Functions:



/*
charAt():

It is a method that returns the character from the specified index.
Characters in a string are indexed from left to right.
The index of the first character is 0, and the index of the last character in a string, 
called stringName, is stringName.length – 1.
*/

var str1=new String("VENKAT NAVEEN MEDARAMETLA");
console.log("CharAt(): "+str1.charAt(14),str1.charAt(0),str1.charAt(7))

/*
charCodeAt() Method:

This method returns a number indicating the Unicode value of the character at the given index.

*/

console.log("CharCodeAt(): "+str1.charCodeAt(14),str1.charCodeAt(0),str1.charCodeAt(7));

/*
concat() Method:

This method adds two or more strings and returns a new single string

*/

var str2=new String(" PANDU");
var str3=str1.concat(str2)
console.log("Concat(): "+str3)

/*
indexOf() Method:

This method returns the index within the calling String object of
the first occurrence of the specified value,
starting the search at fromIndex or -1 if the value is not found.

*/

console.log("indexOf(): "+str3.indexOf("PANDU"))
console.log("indexOf(): "+str3.indexOf("NAVE"))

/*

slice() Method:

This method extracts a section of a string and returns a new string.
The syntax for slice() method is −
string.slice( beginslice [, endSlice] );

*/

var sliced = str3.slice(3, -2);
console.log("Slice(): "+sliced)

/*

split() Method:

This method splits a String object into an array of
strings by separating the string into substrings.

*/

var splitted = str3.split(" ", 2);
console.log("split(): "+splitted)

/*

substr() Method:

This method returns the characters in a string beginning at the
specified location through the specified number of characters.

The syntax to use substr() is as follows:
string.substr(start[, length]);
*/

console.log("substr(): "+str3.substr(5,9))

/*

substring() Method:

This method returns a subset of a String object.
The syntax to use substr() is as follows:
string.substring(indexA, [indexB])
*/

console.log("substring(): "+str3.substring(4,9))
console.log("substring(): "+str3.substring(4,9))



/*

OUTPUT:


C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node StringFunctions.js
CharAt(): M V N
CharCodeAt(): 77 86 78
Concat(): VENKAT NAVEEN MEDARAMETLA PANDU
indexOf(): 26
indexOf(): 7
Slice(): KAT NAVEEN MEDARAMETLA PAN
split(): VENKAT,NAVEEN
substr(): T NAVEEN
substring(): AT NA

*/

