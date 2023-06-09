const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bookingRoutes = require('./routes/booking')

const app = express()

dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


app.use('/booking', bookingRoutes)

const PORT = process.env.PORT || 3000;
const DB_USERNAME = process.env.DB_USERNAME || "root"
const DB_PASSWORD = process.env.DB_PASSWORD || "password"
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_NAME = process.env.DB_NAME || "mydatabase"

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

const connectionURL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:2222/${DB_NAME}?authSource=admin`;

mongoose.set("strictQuery", true)
mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.log(`${error} did not connect`));

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connect to database");
})

console.log('Hello');