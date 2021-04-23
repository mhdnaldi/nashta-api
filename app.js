const express = require("express");
const app = express();
const api = require("./src/navigation");
const cors = require("cors");

require("dotenv").config();

app.use(express.static("uploads"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(api);

app.listen(process.env.PORT, (req, res) => {
  console.log(`LISTENING REQUEST ON PORT ${process.env.PORT}`);
});
