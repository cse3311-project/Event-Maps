const mongoose = require('mongoose');

// design object
const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: false},
    organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: false},
    address: { type: String, required: true},
    description: { type: String, required: false},
  });

//constructor based on schema
module.exports = mongoose.model('Event', eventSchema);