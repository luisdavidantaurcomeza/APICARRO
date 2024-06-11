const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: ProcessingInstruction.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});