var a=process.argv[2];
var flag=0;
for(var i=2;i<a;i++){
    if(a%i==0){
        flag=1;
        break;
    }
   }
   if (a==1) 
       console.log("1 is neither a prime nor a composite number");
   else if(flag==0)
       console.log('Prime number');
   else 
       console.log('Not a prime number');


C:\Users\Venkat Naveen\Berkadia>node prime.js 1
1 is neither a prime nor a composite number

C:\Users\Venkat Naveen\Berkadia>node prime.js 5
Prime number
