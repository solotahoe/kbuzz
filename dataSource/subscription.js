/* eslint-disable camelcase */
const { v4: uuidv4 } = require('uuid')
const crypto = require('crypto')

// generate unique ids for the plan;
const platinum_id = 'eb6e20eeP'
const gold_id = '8b257cdaG'
const silver_id = '1d41fa7eS'
const bronze_id = 'de261f75B'
const freemium_id = '78209086F'
// am using uuid external npm module to generate the unique ids
const subscriptions = [
  // 1
  {
    business_id: uuidv4(),
    email: 'businesid1@gmail.com',
    plan_id: platinum_id, // This represents the id of the    platinum plan
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
    plan_id: gold_id, // This represents the id of the gold plan
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
    plan_id: silver_id, // This represents the id of the silver plan
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
    plan_id: bronze_id, // This represents the id of the bronze plan
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
    plan_id: freemium_id, // This represents the id of the free plan
    payment_platform: {
      token: crypto.randomBytes(12).toString('hex'),
      external_id: crypto.randomBytes(10).toString('hex'),
      name: 'Stripe'
    }
  }

]

module.exports = subscriptions
