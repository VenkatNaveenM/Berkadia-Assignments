const fs=require('fs')
let appendFileData=function(){
    return new Promise(function(resolve,reject){
    const line=fs.readFile('venkat.txt','UTF8',function (err,line) {
        if (err){
            reject(err)
        }
            else{
            resolve(line)
        }
    })
});
}
let appendsecondFileData=function(){
    return new Promise(function(resolve,reject){
    const line=fs.readFile('pandu.txt','UTF8',function (err,line) {
        if (err){
            reject(err)
        }
            else{
            resolve(line)
        }
    })
});
}
appendFileData().then(function(fromResolve){
    fs.appendFile('Naveen.txt',fromResolve,function (err) {
        if (err) throw err;
      });
      return appendsecondFileData();
}).then(function(fromResolve){
    fs.appendFile('Naveen.txt',fromResolve,function (err) {
        if (err) throw err;
      });
}).catch(function(fromReject){
    console.log("Error Appending")
});
