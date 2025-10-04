const express = require('express')
const router = express.Router()
const productsModel = require('../models/products-model')
const upload = require('../config/multer-config')

router.post('/create', upload.single('image'), async (req, res) => {
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
})

module.exports = router