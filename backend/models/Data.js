const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dataSchema = new Schema({
    category: String,
    topics: [
        {
            topic: String,
            authorId: String,
            content: String,
            link: String
        }
    ]
})

const Data = mongoose.model('app', dataSchema)

module.exports = Data;
