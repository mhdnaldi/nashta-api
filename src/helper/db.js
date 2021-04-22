require("dotenv").config();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "root",
  password: "root",
  database: process.env.DB_NAME,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DATABASE CONNECTED");
  }
});

module.exports = db;
