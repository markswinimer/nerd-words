const mongoose = require('mongoose')

const Library = mongoose.model('Library', {
    libraryName: {
        type: String,
        required: true,
        trim: true
    },
    authorName: {
        type: String,
        required: true,
        trim: true,
    },
    creationDate: {
        type: String,
        default: "01/1/2020",
    },
    wordCount: {
        type: Number,
        required: true,
        default: 0
    },
    words: {
        type: Array,
        required: true,
        minLength: 1
    }
})

module.exports = Library;