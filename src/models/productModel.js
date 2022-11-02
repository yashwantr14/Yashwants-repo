const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: String, 
    catagory : String, 
    price: {
        type : Number,
        required : true
    },
})
module.exports = mongoose.model('Product', productSchema)
