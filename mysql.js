const Pool =require('pg') ;
const cret= Pool.Pool
const con = new cret({

  host: "localhost",
  user: "postgres",
  port:5432,
  password: "Fagner1994@",
   database: "alph_wallet"
 
  
  
});

con.connect(function (err) {
  if (err) {
    throw err;
    console.log("erro msql !");
  }
  console.log("Connected a msql !");

});

module.exports = con

