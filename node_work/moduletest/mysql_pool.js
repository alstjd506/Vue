const mysql = require('mysql2');

const conn = {
    connectionLimit : 10,
    host:'127.0.0.1',
    port:'3306',
    user:'hr',
    password:'hr',
    database:'test'
}

const pool = mysql.createPool(conn);

let name = '길동홍'
let email = 'e@f.g'
let phone = '010-3333-3333'

//const sql = "insert into customers(name, email, phone) values (?,?,?)";
// pool.query(sql, [name, email, phone], function(err, result) {
//     if(err) console.log(err)
//     console.log(result)
// })

const sql = "insert into customers set ?";
const params = {name : '김기자', email : 'q@p.z', phone : '010-4444-4444', address : '대구'}
pool.query(sql, params, function(err, result) {
    if(err) console.log(err)
    console.log(result)
})
