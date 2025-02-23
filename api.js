

 const con = require("./mysql.js")
 const express = require ('express')
 const socketIO = require('socket.io')
 const http = require('http')

 const app = express()
 const server = http.createServer(app)
 const io = socketIO(server,{cors:{origin:"*"}})


 app.use(express.static('public'))

io.on('connection',(socket)=>{
  console.log("connect")

  socket.on("message",(message)=>{
   console.log(message)
   io.emit('message', ` ${message}`)//${socket.id.substr(0,2)}
  })
})




app.get("/mesagen_enviada!", (req, res) => {
  
  res.send(req.query.mesagen);
  
    con.connect(function (err) {
    if (err) {
      throw err;
    }
    

    var sql = `INSERT INTO postagen (mesagen) VALUES ('${req.query.mesagen}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 uma mesagen enviada com sucesso!");
    });
  });

  })
 



/*lista de mesagen*/
con.connect(function (err){
  if(err) {throw err}
  con.query("SELECT * FROM postagen", function (err, result, fields) {
    if (err) throw err;
    
      
    app.get('/lista_mesagen',(req, res)=>{res.json(result)})
      

   
  });
 
})

/*cria conta usuario */
app.get("/criaconta", (req, res) => {
  
  
  
  con.connect(function (err) {
    if (err) {
      throw err;
    }
   
   
    var sql = `INSERT INTO usuario_loguin (nome,email,telefone,senha) VALUES ('${req.query.nome}','${req.query.email}','${req.query.telefone}','${req.query.senha}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 uma conta criada com sucesso!");
    });
  });
});



/*lista de usuario*/
con.connect(function (err){
  
  con.query("SELECT * FROM usuario_loguin", function (err, result, fields) {
    if (err) throw err;
    
      
    app.get('/lista_usuario',(req, res)=>{res.json(result)})
      

   
  }); 

})


/** */

/*app.get("/image", (req, res) => {
  
  con.connect(function (err) {
    if (err) {
      throw err;
    }
    

    var sql = `INSERT INTO postagen (foto) VALUES ('${req.query.foto}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});*/




server.listen(process.env.PORT || 3009, () => console.log("api ligada"));
 



 //SELECT * FROM usuario_loguin join postagen on postagen.id = usuario_loguin.cusopreferido

 
  



  /*
var arry =[]

arry.push({ pl: 'oo' });
app.options("/kaio3",cons())


app.get("/kaio", cons(),(req, res) => res.json(arry));
const obj = req.query.mesagen; */
  