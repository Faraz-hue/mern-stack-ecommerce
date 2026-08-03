const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
        .then((data) => {
            console.log(`MongoDB connected with server data: ${data.connection.host}`)
        })
}

module.exports = connectDatabase