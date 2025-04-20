const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())


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


app.post("/User", (req, res) => {
  const query = "INSERT INTO User (`first_Name`, `last_Name`, `email`, `userName`, `password`) VALUES (?)";
  const values = [
    req.body.first_Name,
    req.body.last_Name,
    req.body.email,
    req.body.userName,
    req.body.password
  ];

  db.query(query, [values], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: "Failed to insert user." });
    }

    // ✅ Send the newly inserted user ID back to the frontend
    return res.status(200).json({ insertId: result.insertId });
  });
});




  app.put("/User/:id", (req, res) => {
  const { email, password } = req.body;
  const userID = req.params.id;

  const query = "UPDATE User SET email = ?, password = ? WHERE user_ID = ?";

  db.query(query, [email, password, userID], (err, result) => {
    if (err) {
      console.error("Update error:", err);
      return res.status(500).json({ error: "Failed to update user." });
    }

    return res.status(200).json({ message: "User updated successfully." });
  });
});





  

app.listen(8081, ()=> {
    console.log("listening");
})





