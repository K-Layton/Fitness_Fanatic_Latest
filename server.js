const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "BoomBox23!",
    database: "Fitness_Fanatic"
});

app.get('/', (req,res)=>{
    return res.json("from backend");
})

app.get('/User', (req,res)=>{
    const sql = "SELECT * FROM User";
    db.query(sql, (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})





