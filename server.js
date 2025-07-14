import { add_User,CleanDatabase } from './connect/connect.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const porta = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/routePages/index.html'));
});

app.get("/NewBie/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/routePages/Newbie.html'))
});

app.post('/Newbie/',(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    try{
        add_User(username,password);
        console.log("Dados enviados!");
        res.redirect('/');
    }catch(error){
        console.error("ERRO:nao foi possivel adicionar este usuario...",error);
        res.status(500).send("Erro")
    }
    
});

//app.get(`/cleantable`,(req,res)=>{
//    try{
//        res.send(CleanDatabase())
//        console.log("Limpo com sucesso!");
//    }catch(error){
//        console.error("Error:Não foi possivel limpar sua tabela:(");
//        res.status(500).send("Error")
//    }
//});

app.listen(porta || 3000,()=>{console.log("http://localhost:3000/")});
