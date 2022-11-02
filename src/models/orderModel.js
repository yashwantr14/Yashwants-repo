const mongoose = require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId : {
        type : objectId,
        ref : "User2"
    },
    productId : {
        type : objectId,
        ref : "Product"
    },
    amount : Number,
    isFreeAppUser : {
        type : Boolean,
        default : false
    },
    date : String

})

module.exports = mongoose.model('Order', orderSchema)
