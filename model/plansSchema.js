const mongoose = require('mongoose')

const plansSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['A', 'D'],
    default: 'A'
  },
  features: {
    videos: Boolean,
    audio: Boolean,
    download: Boolean,
    streaming: Boolean,
    customize: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }

})

const plansModel = mongoose.model('plans dataset', plansSchema)

module.exports = plansModel
