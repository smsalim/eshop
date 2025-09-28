const express = require('express')
const router = express.Router()
const usersModel = require('../models/user-models')

router.get('/', (req, res) => {
    res.send('hey')
})

module.exports = router