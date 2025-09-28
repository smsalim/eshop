const express = require('express')
const router = express.Router()
const ownerModel = require('../models/owner-model')
const config = require('config')

console.log(config.get('NODE_ENV'))

router.get('/', (req, res) => {
    res.send('hey')
})




module.exports = router