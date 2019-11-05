const mysql = require('mysql');
const con = require('../services/conection');
const cons = mysql.createConnection(con);

const cmsql = 'INSERT INTO testes(nome) VALUES ("teste")';

cons.query(cmsql);

cons.end();