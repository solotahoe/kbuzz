const plansModel = require('../model/plansSchema')
const fs = require('fs')
const subModel = require('../model/subscriptonSchema')
const csv = require('fast-csv')
const path = require('path')
const stream = fs.createWriteStream('./views/stream10.csv')

const csvFIleGeneration = async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const price = parseInt(req.query.price)
    // find plans whose prices exceeds set price
    // eslint-disable-next-line camelcase
    const plansGreaterThan_equal_Price = await plansModel.find({ price: { $gte: 50 } })
    // put id in an array for easier retrieval from subscription db
    // eslint-disable-next-line camelcase
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
    csv
      .write(csvArray, { headers: true })
      .pipe(stream)
      .on('finish', () => {
        console.log('fished writting succefulluy')
        res.status(201).sendFile(path.resolve(__dirname, '../views/stream10.csv'))
      })
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: error })
  }
}

module.exports = { csvFIleGeneration }
