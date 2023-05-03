const express = require('express')
const {
    createBooking,
    retrieve,
    updateBooking,
    destroyBooking
} = require('../controllers/booking')

const router = express.Router();

router.post('/', createBooking);
router.get('/:id',retrieve);
router.put('/:id', updateBooking);
router.delete('/:id',destroyBooking);

module.exports = router;