const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        trim: true,
        length: {
            minimum: 6,
            maximum: 12
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        length: {
            minimum: 6,
            maximum: 20
        }
    }
})

module.exports = User;