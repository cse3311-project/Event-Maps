const express = require( 'express' );
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'Handling GET requests to /events'
    });
});

router.post('/', (req, res, next) => {
    // status 201 for resource creation
    res.status(201).json({
        message: 'Handling POST requests to /events'
    });
});

router.get('/:eventId', ( req, res, next ) => {
    const id = req.params.eventId;

    res.status(200).json({
        message: 'You passed event ID'
    });
});


router.patch('/:eventId', ( req, res, next ) => {
    res.status(200).json({
        message: 'updated event'
    });
});

router.delete('/:eventId', ( req, res, next ) => {
    res.status(200).json({
        message: 'deleted event'
    });
});


// export router with configured routes
module.exports = router;