const mongoose = require('mongoose')



const bookSchema = new mongoose.Schema({
    book_name: String,
    author_id: {
        type: Number,
        required: true
    },
    price: Number,
    ratings: Number

}, { timestamps: true });

module.exports = mongoose.model('Book1', bookSchema)