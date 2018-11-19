var a=process.argv.slice(2);
    for(var i = 0; i <= a.length; i++) {
        for(var j = i; j <= a.length; j++) {
            if(i != j && a[i] == a[j]) {
                console.log(a[i]);
            }
        }
    }


    C:\Users\Venkat Naveen\Berkadia>node dupli.js 9 1 2 3 9
    9
    
    C:\Users\Venkat Naveen\Berkadia>node dupli.js 9 1 2 3 9 1
    9
    1