const express = require('express')
const router = express.Router()
const ownerModel = require('../models/owner-model')

if (process.env.NODE_ENV === "development"){
    router.post('/create', async (req, res) => {
        let owners = await ownerModel.find()
        if (owners.length > 0) {
            return res
            .send(503)
            .send("You don't have permission to create a owner")
        } else {
            let owner = await ownerModel.create({
                fullname,
                email,
                password,
                picture,
                gstin
            })
        }
        res.send('owner create work fine')
    })
}

router.get('/', (req, res) => {
    res.send('hey')
})



module.exports = router