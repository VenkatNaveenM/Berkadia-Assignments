let express=require("express");
let app=express();
let BodyParser=require('body-parser');

app.use(BodyParser.json({limit:"10mb"}));

app.use('/student',require('./student'));

app.get('/',(req,res)=>{
    res.send('Hello there from Express')
})

app.listen(5000,()=>console.log('Listening on server port 5000'))