const mongoose = require('mongoose')

const coasterSchema = mongoose.Schema({
    title: String,
    description: String,
    inversions: Number,
    length: Number,
    imageUrl: String
})

const Coaster = mongoose.model('coaster', coasterSchema)

module.exports = Coaster