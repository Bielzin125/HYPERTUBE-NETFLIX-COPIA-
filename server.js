const express = require('express')
const app = express()
const path = require('path')
const porta = process.env.PORT;

const pessoas_logadas = ["gabriel","julia","maria"]

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/routePages/index.html'));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname+'/routePages/login.html'))
});

app.post('/login',(req,res) => {
    pessoas_logadas.forEach((i,v)=>{
        if(req.body.username){
            
        }
    });
});

app.listen(porta || 3000,()=>{console.log("http://localhost:3000/")});
