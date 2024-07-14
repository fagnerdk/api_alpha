import mysql from 'mysql2';

var con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "Fagner1994@",
  port:3306,
  database: "alph_wallet"
  
});

con.connect(function (err) {
  if (err) {
    throw err;
    console.log("erro msql !");
  }
  console.log("Connected a msql !");

});

export {con}

