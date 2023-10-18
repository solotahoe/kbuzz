const plansModel = require('../model/plansSchema')
const plans = require('../dataSource/plans')

const addPlan = async (req, res) => {
  try {
    // Insert many records to Db
    const saveMany = await plansModel.insertMany(plans)
    console.log(saveMany)
    res.status(201).send({ msg: 'Plans succeffully inserted' })
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: 'erro retriving files please retry' })
  }
}

module.exports = { addPlan }
