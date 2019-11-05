const mysql = require('mysql');
const con = require('../config/conection');
const cons = mysql.createConnection(con);

var cmdsq = 'INSERT INTO testes(nome) VALUES ("jao")';

cons.query(cmdsq);