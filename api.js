
import { con } from "./mysql.js";

 import express from "express";

const app = express();

import parser from "body-parser";
import fs from 'fs'
import cons from 'cors'



const urlencodedpase = parser.urlencoded({ extended: false });

app.use(express.json());
var arry =[]

arry.push({ pl: 'oo' });
app.options("/kaio3",cons())

app.get("/kaio", cons(),(req, res) => res.json(arry));

app.get("/kaio2", (req, res) => {
  
  res.send(req.query.mesagen);
  const obj = req.query.mesagen; 
  arry.push({ pl: obj });

  fs.writeFile("obj.json", JSON.stringify(obj, null, 2), (err) => {})
  
  con.connect(function (err) {
    if (err) {
      throw err;
    }
    

    var sql = `INSERT INTO postagen (mesagen) VALUES ('${req.query.mesagen}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});

/*cria conta usuario */
app.get("/criaconta", (req, res) => {
  
  
  
  con.connect(function (err) {
    if (err) {
      throw err;
    }
   
   
    var sql = `INSERT INTO usuario_loguin (nome,email,telefone,senha) VALUES ('${req.query.nome}','${req.query.email}','${req.query.telefone}','${req.query.senha}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});



con.connect(function (err){
  if(err) {throw err}
  con.query("SELECT * FROM postagen", function (err, result, fields) {
    if (err) throw err;
    
      
    app.get('/kaio3',cons(), (req, res)=>{res.json(result)})
      

   
  });
 
})


con.connect(function (err){
  
  con.query("SELECT * FROM usuario_loguin", function (err, result, fields) {
    if (err) throw err;
    
      
    app.get('/usuario',cons(), (req, res)=>{res.json(result)})
      

   
  }); 

})

app.listen(process.env.PORT || 3000, () => console.log("api ligada"));
 //SELECT * FROM usuario_loguin join postagen on postagen.id = usuario_loguin.cusopreferido

 
  
