/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const plansModel = require('../model/plansSchema')
const plans = require('../dataSource/plans')
const fs = require('fs')
const subModel = require('../model/subscriptonSchema')
const createCsvWriter = require('csv-writer').createObjectCsvWriter
const stream = fs.createWriteStream('./views/subs.csv')

const csvFIleGeneration = async (req, res) => {
  try {
    const price = parseInt(req.query.price)
    // find plans whose prices exceeds set price
    const plansGreaterThan_equal_Price = await plansModel.find({ price: { $gte: 50 } })
    // put id in an array for easier retrieval from subscription db
    const subscriptionPlanId = plansGreaterThan_equal_Price.map((plan) => {
      return plan.name
    })
    // retrieve all instances with this subscription name from subscription dataset
    const allSubwithThisPlanId = await subModel.find({ plan_id: { $in: subscriptionPlanId } })

    // generate a new file with the required csv fields using this feedback;
    const csvArray = []
    for (let i = 0; i < allSubwithThisPlanId.length; i++) {
      const eachPlanDetails = {
        business_id: allSubwithThisPlanId[i].business_id,
        email: allSubwithThisPlanId[i].email,
        plan_id: allSubwithThisPlanId[i].plan_id,
        payment_platform_name: allSubwithThisPlanId[i].payment_platform.name
      }

      switch (allSubwithThisPlanId[i].plan_id) {
        case 'eb6e20eeP':
          eachPlanDetails.plan_name = 'Platinum'
          eachPlanDetails.price = 100
          break
        case '8b257cdaG':
          eachPlanDetails.plan_name = 'Gold'
          eachPlanDetails.price = 70
          break
        case '1d41fa7eS':
          eachPlanDetails.plan_name = 'Silver'
          eachPlanDetails.price = 50
          break
        case 'de261f75B':
          eachPlanDetails.plan_name = 'Bronze'
          eachPlanDetails.price = 30
          break
        case '78209086F':
          eachPlanDetails.plan_name = 'Freemium'
          eachPlanDetails.price = 0
          break
        default:
          break
      }
      csvArray.push(eachPlanDetails)
    }
    // generate a csv file once you have the organized array of details usning the csvWriter module;
    const csvWriter = createCsvWriter({
      path: './views/above50.csv',
      header: [
        { id: 'business_id', title: 'business_id' },
        { id: 'email', title: 'email' },
        { id: 'plan_id', title: 'plan_id' },
        { id: 'plan_name', title: 'plan_name' },
        { id: 'price', title: 'plan_price' },
        { id: 'payment_platform_name', title: 'payment_platform_name' }
      ]
    })
    csvWriter
      .writeRecords(csvArray)
      .then(() => {
        console.log('CSV file generated successfully')
        res.status(201)
      })
      .catch((err) => {
        console.error(err)
      })
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: 'error retriving files please retry' })
  }
}

module.exports = { csvFIleGeneration }
