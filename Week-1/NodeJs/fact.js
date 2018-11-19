
var n, i;
var factorial = 1;
var n=process.argv[2];
if (n < 0)
    console.log("Factorial of a negative number doesn't exist");
else
    {
        for(i=1; i<=n; ++i)
        {
            factorial *= i;
        }
        console.log("Factorial of "+n+" is: "+factorial);
    }


    C:\Users\Venkat Naveen\Berkadia>node fact.js -1
    Factorial of a negative number doesn't exist
    
    C:\Users\Venkat Naveen\Berkadia>node fact.js 2
    Factorial of 2 is: 2
    
    C:\Users\Venkat Naveen\Berkadia>node fact.js 5
    Factorial of 5 is: 120