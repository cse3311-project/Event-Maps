const express = require( 'express' );
const router = express.Router();
const mongoose = require('mongoose');

const Organization = require( '../models/organization' );

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'organizations were fetched'
    });
});

router.post('/', (req, res, next) => {
    // status 201 for resource creation

    const organization = new Organization({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });

    organization
        .save()
        .then( result => {
            console.log(result);
            res.status(201).json({
                message : 'Created organization succesfully',
                createdOrganization: {
                    name: result.name,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/organizations/' + result._id
                    }
                }

            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error : err})
        });

});



router.get('/:organizationId', ( req, res, next ) => {
    const id = req.params.eventId;

    res.status(200).json({
        message: 'organization was specific id was fetched',
        id: id
    });
});


router.patch('/:organizationId', ( req, res, next ) => {
    res.status(200).json({
        message: 'updated organization information'
    });
});

router.delete('/:organizationId', ( req, res, next ) => {
    res.status(200).json({
        message: 'deleted organization'
    });
});


// export router with configured routes
module.exports = router;