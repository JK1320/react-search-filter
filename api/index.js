const express = require("express");
const app = express();
const cors = require("cors");
const Users = require("./users");

app.use(cors());

app.get("/", (req, res) => {
res.json(Users);
});

app.listen(5001, () => console.log("API IS WORKING"));