const express = require('express');

const { BookingController } = require('../../controller/index');
const bookingController = new BookingController();
const router = express.Router();

router.post('/bookings', bookingController.create);

router.post('/publish', bookingController.sendMessageToQueue);


router.get('/home', (req, res) => {
    return res.status(201).json({
        message: "Message send from Booking service"
    })
})

module.exports = router;