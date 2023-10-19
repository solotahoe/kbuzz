/* eslint-disable new-cap */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai')
const request = require('supertest') // library for making HTTP requests in tests.
const app = require('../index')
const mongoose = require('mongoose')
const subModel = require('../model/subscriptonSchema')

// connect to database

describe('Subscription Schema', () => {
  it('should be a valid model', () => {
    expect(() => new subModel()).to.not.throw()
  })

  it('should have _id,payment_platform fields', () => {
    const subscription = new subModel()
    const fields = ['_id', 'payment_platform']
    fields.forEach((field) => {
      expect(subscription[field]).to.exist
    })
  })

  it('should require business_id, email, plan_id, and token fields', () => {
    const subscription = new subModel()
    subscription.validate((err) => {
      expect(err.errors.business_id).to.exist
      expect(err.errors.email).to.exist
      expect(err.errors.plan_id).to.exist
      expect(err.errors['payment_platform.token']).to.exist
    })
  })

  it('should have a default date of Date.now for payment_platform.date', () => {
    const subscription = new subModel()
    expect(subscription.payment_platform.date).to.be.a('Date')
  })
})
