const express = require('express');
const User = require('../models/user');

const router = new express.Router()

router.post('/users', async (req, res) => {
    console.log("---Attempting Create User---")
    console.log(req.body)

    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
})

router.post('/login', async (req, res) => {
    console.log("---Attempting Login---")
    console.log(req.body)
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send()
    }
})

module.exports = router