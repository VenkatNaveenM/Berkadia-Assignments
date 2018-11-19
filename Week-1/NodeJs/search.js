var n=process.argv.slice(3);
var search=process.argv[2];
for (var c=0; c<n.length; c++)
{
  if (n[c] == search)    /* If required element is found */
  {
    console.log(search+" is present at location "+(c+1));
    break;
  }
}
if (c==n.length)
  console.log(search+" isn't present in the array");


  C:\Users\Venkat Naveen\Berkadia>node search.js 10 20 3 4 5 88 10
10 is present at location 6

C:\Users\Venkat Naveen\Berkadia>node search.js 55 10 20 3 4 5 88 10
55 isn't present in the array