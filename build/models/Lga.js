'use strict';

var mongoose = require('mongoose');
// Use global promise for mongoose
mongoose.Promise = global.Promise;

// Make Schema
var lgaSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: 'Please enter a valid Lga',
    unique: true
  },
  stateId: {
    type: mongoose.Schema.ObjectId,
    ref: 'State',
    required: 'Lga should have a valid State!'
  }
}, { collection: 'lga', timestamps: true });

module.exports = mongoose.model('Lga', lgaSchema);
//# sourceMappingURL=Lga.js.map