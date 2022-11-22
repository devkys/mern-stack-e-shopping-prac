require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
