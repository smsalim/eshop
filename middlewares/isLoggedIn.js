const jwt = require('jsonwebtoken')
const usersModel = require('../models/user-models')

module.exports = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash('error', 'you need to login first')
        return res.redirect('/')
    }

    try {
        let decode = jwt.verify(req.cookies.token, process.env.JWT_TOKEN)
        let user = await usersModel.findOne({ email: decode.email}).select('-password')
        req.user = user
        next()
    } catch (err) {
        req.flash('error', 'something went wrong')
        return res.redirect('/')
    }
}