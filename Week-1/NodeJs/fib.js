
var i, n, t1 = 0, t2 = 1, nextTerm;
var n=process.argv[2];
console.log("Fibonacci Series: ");
for (i = 1; i <= n; ++i){
    console.log(" ", t1);
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
    }


    C:\Users\Venkat Naveen\Berkadia>node fib.js 5
    Fibonacci Series:
      0
      1
      1
      2
      3