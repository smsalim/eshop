const express = require('express')
const router = express.Router()
const usersModel = require('../models/user-models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

router.get('/', (req, res) => {
    res.send('hey')
})

router.post('/register', (req, res) => {
    try {
        let {fullname, email, password} = req.body
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.massage)
                else {
                let user = await usersModel.create({
                fullname,
                email,
                password: hash
                })
                let token = jwt.sign({email, id:user._id}, 'secretkey')
                res.cookie('token', token)
                res.send(user)
            }
            })
        })


    } catch (err) {
        res.send(err.massage)
    }

})

module.exports = router