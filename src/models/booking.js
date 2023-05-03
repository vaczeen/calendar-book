const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema = Schema({
    title: String,
    description: String,
    day: { type: Number, required: true },
    date: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    hour: { type: Number, required: true },
    minute: { type: Number, required: true }

}, {
    timestamps: true
})

module.exports = mongoose.model('Booking', BookingSchema)