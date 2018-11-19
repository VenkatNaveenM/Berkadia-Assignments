const fs=require("fs");
function appendFiledata(data, callback) {
    fs.appendFile('Naveen.txt',data,function (err) {
      if (err) throw err;
    });
    const line=fs.readFile('venkat.txt','UTF8',function (err,line) {
      if (err) throw err;
      callback(line);
    });
    
  }
  function appendSecondFile(data){
    fs.appendFile('Naveen.txt',data,function (err) {
      if (err) throw err;
    });
  }
  const lines=fs.readFile('pandu.txt','UTF8',function (err,lines) {
    if (err) throw err;
    appendFiledata(lines, appendSecondFile);
  });
  