const express = require('express')
const Library = require('../models/library')
// const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/libraries', async (req, res) => {
    console.log("--------------IN POST---------")
    const library = new Library(req.body)

    try {
        await library.save()
        res.status(201).send(library)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/libraries', async (req, res) => {
    console.log("Made it to all libraries")

    try {
        const libraries = await Library.find({})
        res.send(libraries)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/libraries/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const library = await Library.findById(_id)

        if (!library) {
            return res.status(404).send()
        }
        res.send(library)
    } catch (e) {
        res.status(404).send()
    }
})

router.delete('/libraries/:id', async (req, res) => {
    try {
        const library = await Library.findByIdAndDelete(req.params.id)

        if (!library) {
            return res.status(404).send()
        }
        res.send(library)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router