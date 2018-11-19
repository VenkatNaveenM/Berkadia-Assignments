var fs = require('fs');
fs.readFile('pandu.txt', 'utf8', function(err, contents) {
    if (err) throw err;
    console.log(contents);
});
fs.writeFile('pandu.txt','Medarametla', function(err) {
    if(err) throw err;
    console.log("The file was saved!");
});