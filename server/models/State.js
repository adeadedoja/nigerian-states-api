const mongoose = require('mongoose');
// Use global promise for mongoose
mongoose.Promise = global.Promise;

// Make Schema
const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: 'Please enter a valid state',
    unique: true,
  },
  geoPoliticalZone: {
    type: String,
    trim: true,
    required: 'Enter a Geo Political Zone',
  },
}, { collection: 'state', timestamps: true });


module.exports = mongoose.model('State', stateSchema);
