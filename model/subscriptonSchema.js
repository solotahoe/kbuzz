const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
  business_id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  plan_id: {
    type: String,
    required: true
  },
  payment_platform: {
    token: {
      type: String,
      required: true
    },
    external_id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      enum: ['Stripe', 'Paypal'],
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }

})

subscriptionSchema.index({ plan_id: 1 })
const subscriptionModel = mongoose.model('subscriptions dataset', subscriptionSchema)

module.exports = subscriptionModel
