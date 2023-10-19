/* eslint-disable n/handle-callback-err */
/* eslint-disable new-cap */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
process.env.NODE_ENV = 'test'
const { expect } = require('chai')
const request = require('supertest') // library for making HTTP requests in tests.
const mongoose = require('mongoose')
const subModel = require('../model/subscriptonSchema')
const subTestModel = require('../model/testingModel')
const chaiHttp = require('chai-http')
const app = require('../index')
const chai = require('chai')
const should = chai.should()

chai.use(chaiHttp)
// clean database before startign the testing process
// before(async (done) => {
//   await subTestModel.deleteMany({}, (err) => {
//     done()
//   })
// })

// // clear the database after you are done testing
// after(async (done) => {
//   await subTestModel.deleteMany({}, (err) => {
//     done()
//   })
// })

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

  // test a simple test api on index.js
  it('should test the test/route api on the index.js file', (done) => {
    chai.request(app)
      .get('/test/route')
      .end((err, res) => {
        if (err) {
          console.log(err)
          done(err) // Call done() with an error argument if there's an error
        }
        res.should.have.status(200)
        res.body.should.be.a('object')
        expect(res._body.msg).to.be.equal('api responding as expected')
        done() // Call done() to indicate that the test is complete
      })
  })
  it('should test the get all subscription routes', async () => {
    try {
      const res = await chai.request(app).get('/sub/all')
      res.should.have.statusCode(200)
      res.body.should.be.a('object')
    } catch (error) {
      console.error(error)
      throw error
    }
  })
  it('should test the post subscription  instance routes usngi the test db', async () => {
    try {
      const res = await chai.request(app).get('/sub/all')
      res.should.have.statusCode(200)
      res.body.should.be.a('object')
    } catch (error) {
      console.error(error)
      throw error
    }
  })
})
