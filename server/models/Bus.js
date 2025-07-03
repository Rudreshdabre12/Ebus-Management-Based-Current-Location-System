const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  route: {
    source: { type: String, required: true },
    destination: { type: String, required: true },
    stops: [{ type: String }],
  },
  type: { type: String, required: true },
  currentLocation: {
    lat: { type: Number },
    lng: { type: Number },
  },
  lastUpdated: { type: Date },
  lingerTimes: [{ stop: String, timeSpent: Number }],
}, { timestamps: true });

module.exports = mongoose.model('Bus', busSchema);
