const express = require('express')
const plansController = require('../controller/plansController')

const router = express.Router()

router.post('/add', plansController.addPlan)

module.exports = router
