const fs=require("fs");
let lyrics = fs.readFileSync('venkat.txt','UTF8');
fs.appendFile('pandu.txt',lyrics, function (err) {
  if (err) throw err;
  console.log('Saved!');
});