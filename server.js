

const mongoose = require("mongoose")

const dotenv =  require("dotenv").config()


const app = require("./app")





// Database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connection is successful");
    // Additional code or server startup logic can be added here
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });


// server

const port = process.env.PORT || 8000

app.listen(port , () => {
    console.log(`App is running on port ${port}`)
})