const express = require("express");
const dotenv = require("dotenv");
const route = require("./routes");
const db = require("./config/db/db");
const fileupload = require("express-fileupload");
const cors = require("cors");
const app = express();
dotenv.config();
const port = process.env.PORT;

// Get data req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());
app.use(cors());
// Connect to database
db.connect();

route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
