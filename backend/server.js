
const dotenv = require("dotenv")
// Config
dotenv.config({ path: `backend/config/config.env` })

const app = require("./app")

const connectDatabase = require("./config/database")


// Handling Uncaught Exception

process.on("uncaughtException", (err) => {
    console.log(`Error ${err.message}`);
    console.log("Shutting down due to uncaught Exception");
    process.exit(1)
})


// Connecting to database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server working on https://localhost:${process.env.PORT}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the Server due to unhandled Promise Rejection");
    server.close(() => {
        process.exit(1)
    })
})