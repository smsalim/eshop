const mongoose = require('mongoose')
const dbgr = require('debug')('development:mongoose')

mongoose
.connect('mongodb://localhost:27017/eshop')
.then(() => {
    dbgr('Connected to MongoDB')
})
.catch((err) => {
    dbgr(err)
})

module.exports = mongoose.connection