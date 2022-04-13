const express = require("express");
const dotenv = require("dotenv");
const route = require("./routes");
const db = require("./config/db/db");
const app = express();
const port = 5000;
dotenv.config();

// Get data req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
db.connect();

route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
