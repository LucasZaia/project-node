const mysql = require('mysql');
const con = require('../config/conection');
const cons = mysql.createConnection(con);

var i = "caio";
var cmdsq = "INSERT INTO testes(nome) VALUES ('"+i+"')";


cons.query(cmdsq);