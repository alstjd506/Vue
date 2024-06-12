const mysql = require('mysql2');

const conn = {
    host:'127.0.0.1',
    port:'3306',
    user:'hr',
    password:'hr',
    database:'test'
}

let connection = mysql.createConnection(conn); // db커넥션 생성

connection.connect(); //db 접속

const sql = "SELECT * FROM customers";

connection.query(sql, function (err, result, field) {
    if (err) {
        console.log(err);
    }
    console.log(result);
})
connection.end(); // db접속 종료