/* //arquivo db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao BD: ${process.env.DB_NAME}`)
});

module.exports = connection; */

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

function connectWithRetry() {
    connection.connect((error) => {
        if (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
            console.log('Tentando reconectar em 5 segundos...');
            setTimeout(connectWithRetry, 5000); // Tentar reconectar após 5 segundos
        } else {
            console.log(`Conectado ao BD: ${process.env.DB_NAME}`);
        }
    });
}

connection.on('error', (error) => {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Conexão com o banco de dados foi perdida. Reconectando...');
        connectWithRetry();
    } else {
        throw error;
    }
});

connectWithRetry();

module.exports = connection;