var num1=process.argv[2];
var num2=process.argv[3];
if(num1 > num2)
{
    console.log(num1+" is Maximum")        
}
if(num2 > num1)
{
    console.log( num2+" is Maximum");
}
if(num1 == num2)
{
    console.log( "Both are Equal");
}



C:\Users\Venkat Naveen\Berkadia>node maxelement.js 5 6
6 is Maximum

C:\Users\Venkat Naveen\Berkadia>node maxelement.js 5 5
Both are Equal