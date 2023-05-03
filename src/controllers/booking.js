const Booking = require('../models/booking')


const createBooking = async (req, res) => {
    try {
        const { title, description, day, date, month, year, hour, minute } = req.body;
        const oldBooking = await Booking.find({
            day: day,
            date: date,
            month: month,
            year: year,
            hour: hour,
            minute: minute
        })
        if (oldBooking.length > 0) {
            return res.status(400).json({ "detail": "Booking Already Exist" })
        }
        const booking = new Booking({
            title,
            description,
            day: parseInt(day),
            date: parseInt(date),
            month: parseInt(month),
            year: parseInt(year),
            hour: parseInt(hour),
            minute: parseInt(minute),

        });
        await booking.save();
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).send({ message: 'Error while create booking.', detail: error })
    }
}

const retrieve = async (req, res) => {
    try {
        const booking = await Booking.findOne();
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).send({ message: 'Error while retrieve booking.', detail: error })
    }
}
const updateBooking = async (req, res) => {
    try {
        const { title, description, day, date, month, year, hour, minute } = req.body;
        const booking = await Booking.findByIdAndUpdate(req.params.id, {
            title,
            description,
            day: parseInt(day),
            date: parseInt(date),
            month: parseInt(month),
            year: parseInt(year),
            hour: parseInt(hour),
            minute: parseInt(minute),
        }, { new: true });
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).send({ message: 'Error update booking.', detail: error })
    }

}

const destroyBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Already delete booking.', detail: booking })
    } catch (error) {
        res.status(500).send({ message: 'Error delete booking.', detail: error })
    }

}
module.exports = {
    createBooking,
    retrieve,
    updateBooking,
    destroyBooking
}