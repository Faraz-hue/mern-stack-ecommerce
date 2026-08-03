const express = require("express")
const app = express()

const errorMiddleWare = require("./middlewares/error")
app.set("query parser", "extended");
app.use(express.json())
// Route Imports
const product = require("./routes/productRoute")
app.use(`/api/v1`, product)


// Middleware for Errors
app.use(errorMiddleWare)

module.exports = app