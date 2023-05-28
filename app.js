const express = require("express");
const app = express();
app.timeout = 0;
const cors = require("cors");
const path = require('path')

const mongoose = require("mongoose");

const mediaRoutes = require('./routes/media')
const registerRoutes = require('./routes/register')
const authRoutes = require('./routes/auth')
const refreshRoutes = require('./routes/refresh');
const corsOptions = require("./config/corsOptions");
const credentials = require("./middlewares/credentials");

// middlewares

app.use(express.json());
app.use(credentials);
app.use(cors(corsOptions));

app.use('/api/v1/media',mediaRoutes)

app.use('/api/v1/register',registerRoutes );
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/refresh', refreshRoutes);
app.use('/public',express.static(path.join(__dirname, 'public')))




app.get("/", (req, res) => {
  res.send("Route is working");
});





module.exports = app;
