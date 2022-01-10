const database = require('mime-db')
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3307,
    user: 'root',
    passowrd: '34035249',
    database: 'bage-estoque'
})

module.exports = conexao;
