const { send } = require('micro')

module.exports = function (request, response) {
  const number = Math.floor(Math.random() * 100);
  if(number>50){
     var result='The Number is '+number+' (above 50) and Number is '+evenodd(number)

  }else{
    var result='The Number is '+number+' (below 50) and Number is '+evenodd(number)
  }
  send(response, 200,result)
}

function randomNumber (){
    return Math.random();
 }

 function evenodd(n) {
     if(n%2===0){
         return 'Even'
     }else{
         return 'Odd'
     }
 }



 /*
OUTPUT:

C:\Users\Venkat Naveen\Downloads\SHAREit\Week-5\NodeJs\Microservice>micro index.js
micro: Accepting connections on port 3000


In Browser:

By refreshing every time

The Number is 15 (below 50) and Number is Odd

The Number is 92 (above 50) and Number is Even

The Number is 46 (below 50) and Number is Even

The Number is 29 (below 50) and Number is Odd
*/