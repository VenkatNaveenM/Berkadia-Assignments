var a=process.argv.slice(2);
a.sort();
console.log(a);

C:\Users\Venkat Naveen\Berkadia>node sort.js 9 1 2 3 9 1
[ '1', '1', '2', '3', '9', '9' ]

C:\Users\Venkat Naveen\Berkadia>node sort.js 10 20 3 4 5 88
[ '10', '20', '3', '4', '5', '88' ]