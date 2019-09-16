const mongoose = require('mongoose');

// design object
const organizationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true},
  });





//constructor based on schema
module.exports = mongoose.model('Organization', organizationSchema);
