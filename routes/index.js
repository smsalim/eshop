const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/isLoggedIn')
const productsModel = require('../models/products-model')
const userModel = require('../models/user-models')

router.get('/', (req, res) => {
    let error = req.flash('error')
    res.render('index', { error, loggedin: false })
})

router.get('/shop', isLoggedIn, async (req, res) => {
    let products = await productsModel.find()
    let success = req.flash('Success')
    res.render('shop', { products, success })
})

router.get('/addtocart/:productid', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    user.cart.push(req.params.productid)
    await user.save()
    req.flash("success", "Added to Cart")
    res.redirect('/shop')
})

router.get('/logout', isLoggedIn, (req, res) => {
    res.redirect('/')
})

module.exports = router