const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  stops: [{
    name: String,
    arrivalTime: Date,
    lingerTime: Number,
  }],
  startedAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
