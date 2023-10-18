const express = require('express')

const subscriptionController = require('../controller/subscriptionController')

const router = express.Router()

router.get('/all', subscriptionController.getTotalRecords)
router.post('/add/platinum', subscriptionController.addPlatinumSubscription)
router.post('/add/gold', subscriptionController.addGoldSubscription)
router.post('/add/silver', subscriptionController.addSilverSubscription)
router.post('/add/bronze', subscriptionController.addBronzeSubscription)
router.post('/add/fremuim', subscriptionController.addFremiuimSubscription)

module.exports = router
