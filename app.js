const express = require("express");
const app = express();
app.timeout = 0;
const cors = require("cors");
const path = require('path')

const mongoose = require("mongoose");

const mediaRoutes = require('./routes/media')

// middlewares

app.use(express.json());
app.use(cors());

app.use('/api/v1/media',mediaRoutes)
app.use('/public',express.static(path.join(__dirname, 'public')))



app.get("/", (req, res) => {
  res.send("Route is working");
});





module.exports = app;
