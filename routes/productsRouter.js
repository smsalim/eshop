const express = require('express')
const router = express.Router()
const productsModel = require('../models/products-model')
const upload = require('../config/multer-config')

router.post('/create', upload.single('image'), async (req, res) => {
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body
        let product = await productsModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
    })
    req.flash("success", "product created successfully")
    res.redirect('/owners/admin')
    } catch (err) {
        res.send(err.massage)
    }
})

module.exports = router