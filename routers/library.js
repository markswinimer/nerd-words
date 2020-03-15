const express = require('express')
const Library = require('../models/library')
// const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/libraries', async (req, res) => {
    console.log("--------------IN POST---------")
    console.log(req.body)
    const library = new Library(req.body)

    try {
        await library.save()
        res.status(201).send(library)
    } catch (e) {
        res.status(400).send()
    }
})

//Temporary function, will use user auth later
router.get('/libraries/owned', async (req, res) => {
    console.log("Get request to 'owned' route [default hard coded]: Mark Swinimer")

    const author = "Mark Swinimer"
    try {
        const libraries = await Library.find({ authorName: author })
        res.send(libraries)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.get('/libraries/top', async (req, res) => {
    console.log("Get request to 'top route'")
    try {
        const topLibraries = await Library.find({}).sort('-playCount').limit(10)
        res.send(topLibraries)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/libraries', async (req, res) => {
    console.log("Get request to 'all libraries' route")

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

router.patch('/libraries/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    console.log("--------------IN PATCH---------")
    console.log(req.body)
    console.log(updates)
    const allowedUpdates = ['word']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    // This code block exists to provide information if an invalid value is given
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invald Requests given' })
    }
    try {
        console.log(req.params.id)
        const library = await Library.findById(req.params.id)
        console.log(library)
        // this method, as opposed to the one commented out below, does not bypass the 'pre' method
        // in the model
        updates.forEach((update) => {
            library[update] = req.body[update]
        }


        // This is where I left off: I'm trying to get the database to save each individual word as you submit them via the form. 
        // Here, the update methods are validated and compared in order to update the correct values
        // Next: update the word array to include the new word and send back the updated word array.
        // Consider only sending back the updated word array as nothing else will have been changed.

        console.log(library)
        await library.save()
        // 3rd argument is { options }, new: true sends back the updated object not the found one
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!library) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        // could have a server connection/directory issue or a validation issue due to the runValidators option
        res.status(400).send(e)
    }
})

module.exports = router