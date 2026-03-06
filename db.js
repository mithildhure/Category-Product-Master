const mysql = require('mysql2');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "n_project"
})

db.connect((err)=>{
    if (err) {
        console.log("Db connection error : ",err);
    } else {
        console.log("Connected");
    }
})

module.exports = db;