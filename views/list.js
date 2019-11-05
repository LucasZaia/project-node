const mysql = require('mysql');
const con = require('../config/conection');
const cons = mysql.createConnection(con);
var id = 1;
const sql = 'SELECT * FROM testes';
cons.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

