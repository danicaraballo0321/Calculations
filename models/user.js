const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_last: {
        type: String,
        required: true
    }},

    email:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    access: {
      type: String,
      required: true,
      enum: ['employee', 'admin', 'superadmin']
    }
})

module.exports = mongoose.model('User', userSchema)
