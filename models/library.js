const mongoose = require('mongoose')

const Library = mongoose.model('Library', {
    libraryName: {
        type: String,
        required: true,
        trim: true
    },
    authorName: {
        type: String,
        default: "Default Account",
        trim: true,
    },
    // authorName: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    creationDate: {
        type: String,
        default: "01/1/2020",
    },
    wordCount: {
        type: Number,
        default: 0
    },
    playCount: {
        type: Number,
        default: 0
    },
    words: {
        type: Array,
    }
})

module.exports = Library;