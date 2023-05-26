const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

const mediaRoutes = require('./routes/media')

// middlewares

app.use(express.json());
app.use(cors());

app.use('/api/v1/media',mediaRoutes)



app.get("/", (req, res) => {
  res.send("Route is working");
});





module.exports = app;
