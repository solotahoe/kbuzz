/* eslint-disable camelcase */
const { v4: uuidv4 } = require('uuid')
const crypto = require('crypto')

// generate random ids;
const gold_id = 'eb6e20eeP'
// am using uuid external npm module to generate the unique ids
const goldsubscriptions = [
  // 1
  {
    business_id: uuidv4(),
    email: 'businesid1@gmail.com',
    plan_id: gold_id,
    payment_platform: {
      token: crypto.randomBytes(12).toString('hex'),
      external_id: crypto.randomBytes(10).toString('hex'),
      name: 'Stripe'
    }
  },
  // 2
  {
    business_id: uuidv4(),
    email: 'businesid2@gmail.com',
    plan_id: gold_id,
    payment_platform: {
      token: crypto.randomBytes(12).toString('hex'),
      external_id: crypto.randomBytes(10).toString('hex'),
      name: "'Paypal'"
    }

  },
  // 3

  {
    business_id: uuidv4(),
    email: 'businesid3@gmail.com',
    plan_id: gold_id,
    payment_platform: {
      token: crypto.randomBytes(12).toString('hex'),
      external_id: crypto.randomBytes(10).toString('hex'),
      name: 'Stripe'
    }
  },
  // 4
  {
    business_id: uuidv4(),
    email: 'businesid4@gmail.com',
    plan_id: gold_id,
    payment_platform: {
      token: crypto.randomBytes(12).toString('hex'),
      external_id: crypto.randomBytes(10).toString('hex'),
      name: 'Paypal'
    }
  },
  // 5
  {
    business_id: uuidv4(),
    email: 'businesid5@gmail.com',
    plan_id: gold_id,
    payment_platform: {
      token: crypto.randomBytes(12).toString('hex'),
      external_id: crypto.randomBytes(10).toString('hex'),
      name: 'Stripe'
    }
  }

]

module.exports = goldsubscriptions
