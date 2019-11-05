const mysql = require('mysql');

const con = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'teste'
});

con.connect(function(err){
    if(err){
        return console.log('Erro ao conectar!');
    }
    return console.log('Conectado com sucesso!');
});

const cmsql = 'INSERT INTO testes(nome) VALUES ("Lucas")';

con.query(cmsql);

