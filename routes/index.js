const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/isLoggedIn')
const productsModel = require('../models/products-model')

router.get('/', (req, res) => {
    let error = req.flash('error')
    res.render('index', { error })
})

router.get('/shop', isLoggedIn, async (req, res) => {
    let products = await productsModel.find()
    res.render('shop', { products })
})

router.get('/logout', isLoggedIn, (req, res) => {
    res.redirect('/')
})

module.exports = router