const express = require('express')
const router = express.Router()
const csvRoutes = require('../controller/csvControllers')

router.get('/generate', csvRoutes.csvFIleGeneration)

module.exports = router
