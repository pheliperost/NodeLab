const mysql = require('mysql');
//MySQL details
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@llet0605',
    database: 'banco_rost',
    multipleStatements: true
    });

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });

    module.exports =  mysqlConnection;