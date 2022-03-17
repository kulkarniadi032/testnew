const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const db = require("./config/db");
db();
const cors = require("cors");
const page1 = require("./routes/page1-routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", page1);
app.listen(process.env.PORT || 5000, () => {
  console.log("server is running");
});
