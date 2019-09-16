const express = require( 'express');

const app = express();
const morgan = require( 'morgan' );
const eventRoutes = require( './api/routes/events' );
const organizationRoutes = require( './api/routes/organizations' );
const bodyParser = require('body-parser');
const mongoose = require( 'mongoose' );


//connect database
mongoose.connect( 'mongodb+srv://event-maps:' + process.env.MONGO_ATLAST_PW + '@event-maps-api-nxx4b.mongodb.net/test?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

// Use default node.js promise implementation
mongoose.Promise = global.Promise;

//request logger
app.use( morgan('dev') );
//extract json and urlencoded data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// preventing cors errors
app.use((req, res, next) => {
    // deals with cors, gives access to any client
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-requested-Width, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', 'PUT, POST, PATCH', 'DELETE, GET');
      return res.status(200).json({});
    }

    // so other routes can take over
    next();
  });

// sets up middleware
// urls with /products will be forwarded
//Routes which should handle requests
app.use( '/events', eventRoutes );
app.use( '/organizations', organizationRoutes);


//error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    //forwards error request
    next(error);
  });

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message : error.message
      }
    });
  });

module.exports = app;