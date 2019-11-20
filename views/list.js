const mysql = require('mysql');
const con = require('../config/conection');
const cons = mysql.createConnection(con);
var i = "caio";
const sql = 'SELECT * FROM testes WHERE nome = "'+i+'"';
cons.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

