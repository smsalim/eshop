const usersModel = require('../models/user-models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const { generateToken } = require('../utils/generateToken')


module.exports.registerUser = async (req, res) => {
    try {
        let {fullname, email, password} = req.body
        let user = await usersModel.findOne({email: email})
        if (user) return res.status(401).send('You already have an account')
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.massage)
                else {
                let user = await usersModel.create({
                fullname,
                email,
                password: hash
                })
                let token = generateToken(user)
                res.cookie('token', token)
                res.send(user)
            }
            })
        })

    } catch (err) {
        res.send(err.massage)
    }

}