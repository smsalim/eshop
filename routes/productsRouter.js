const express = require('express')
const router = express.Router()
const productsModel = require('../models/products-model')

router.get('/', (req, res) => {
    res.send('hey')
})

module.exports = router