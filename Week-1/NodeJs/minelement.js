var num1=process.argv[2];
var num2=process.argv[3];
if(num1 > num2)
{
    console.log(num2+" is Minimum")        
}
if(num2 > num1)
{
    console.log( num1+" is Minimum");
}
if(num1 == num2)
{
    console.log( "Both are Equal");
}



C:\Users\Venkat Naveen\Berkadia>node minelement.js 5 5
Both are Equal

C:\Users\Venkat Naveen\Berkadia>node minelement.js 5 6
5 is Minimum

C:\Users\Venkat Naveen\Berkadia>node minelement.js 9 9.5
9 is Minimum