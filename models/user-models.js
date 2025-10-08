const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true
},
  email: {type: String, unique: true, required: true},
  password: String,
  cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product"
  }],
  orders: {
    type: Array,
    default: []
  },
  contact: {type: Number, unique: true, sparse: true},
  picture: String
})

module.exports = mongoose.model('user', userSchema);