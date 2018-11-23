// Array can be created by using array object

//Sample array creation

var arr=new Array(4);
for(var i=0;i<4;i++){
    arr[i]=i*2;
}
for(var i=0;i<4;i++){
    console.log(arr[i]);
}

/* Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node array.js
0
2
4
6
*/

//Array Length function and Reversing the array

var names = new Array("Venkat","Naveen","Medarametla","Pandu") 
for(var i =names.length-1;i>=0;i--) { 
   console.log(names[i]) 
}

/* Output:
C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node array.js
Pandu
Medarametla
Naveen
Venkat
*/

//Array Methods:

var a=["V","E","N","K","A","T"]  // Array 'a'
var b=["N","A","V","E","E","N"]  // Array 'b'

var c=a.concat(b);   //concat method for combining two Arrays
console.log("Concat Method:" +c)

/* 
every method tests whether all the elements in an array passes 
the test implemented by the provided function.
*/

function isBigenough(element,index,array){
    return (element>=10);
}

var d=[12,13,14,15,16,7].every(isBigenough)
console.log("Every Method: "+d)

/*
filter() method creates a new array with all elements that pass
 the test implemented by the provided function.
*/

var e=[12,13,14,15,16,7].filter(isBigenough)
console.log("Filter Method: "+e)

/*
indexOf() method returns the first index
at which a given element can be found in the array, or -1 if it is not present.
*/

var index=[12,13,14,15,16,7].indexOf(14)
console.log("IndexOf Method: "+index)

//join() method joins all the elements of an array into a string.

var str=a.join(" ")
console.log("Join Method: "+str)

/*
map() method creates a new array with the results of calling 
a provided function on every element in this array.
*/

var square=[16,25,36,144,1,49].map(Math.sqrt)
console.log("Map Method: "+square)

//Push and Pop

var pushpop=[16,25,36,144,1,49]
pushpop.pop()   //pop last element
pushpop.push(64)  //pushing 64 in to array
console.log("Push and Pop Method: "+pushpop)


/*
reduce() method applies a function simultaneously against 
two values of the array (from left-to-right) as to reduce it to a single value.
*/
var total =[16,25,36,144,1,49].reduce(function(a, b){ return a + b; }); 
console.log("Reduce Method: " +total );

/*
reverse() method reverses the element of an array.
The first array element becomes the last and the last becomes the first
*/

var rev=[16,25,36,144,1,49].reverse()
console.log("Reverse Method: "+rev)

/*
shift()method removes the first element from an array and returns that element.
*/

var shiftt=[16,25,36,144,1,49].shift()
console.log("Shift Method: "+shiftt)

//slice() method extracts a section of an array and returns a new array.

var a1=["V","E","N","K","A","T"]
console.log("Slice Method: "+a1.slice(1,3))

//sort() method sorts the elements of an array.

var sorting=["N","A","V","E","E","N"]
sorting.sort()
console.log("Sort Method: "+sorting)

//splice() method changes the content of an array, adding new elements while removing old elements.

var ar=["N","A","V","E","E","N"]  
var removed = ar.splice(2, 1,"v");  
console.log("After adding Splice Method: " + ar );  
console.log("Splice Method removed is: " + removed);



/*
OutPut:

C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node array.js
Concat Method:V,E,N,K,A,T,N,A,V,E,E,N
Every Method: false
Filter Method: 12,13,14,15,16
IndexOf Method: 2
Join Method: V E N K A T
Map Method: 4,5,6,12,1,7
Push and Pop Method: 16,25,36,144,1,64
Reduce Method: 271
Reverse Method: 49,1,144,36,25,16
Shift Method: 16
Slice Method: E,N
Sort Method: A,E,E,N,N,V
After adding Splice Method: N,A,v,E,E,N
Splice Method removed is: V


*/