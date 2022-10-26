const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedBook = await bookModel.create(data)
    res.send({ MESSAGE: savedBook })
}

const booksByChetanBhagat = async function (req, res) {
    let data = await authorModel.findOne({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
    let data1 = data.author_id
    let booksRequired = await bookModel.find({ author_id: data1 })
    res.send({ RequiredBooks: booksRequired })

}

const findAuthorAndUpdate = async function (req, res) {

    let data1 = await authorModel.findOne({ book_name: "Two stats"  }).select({ author_id: 1, _id: 0 })
    let author = await authorModel.findOne(data1).select({ author_name: 1, _id: 0 })
    let data = await bookModel.findOneAndUpdate({ book_name: "Two stats" }, { $set: { price: 100 } }, { new: true })

    res.send({ updatedPrice: data, authorName: author })

}


const bookCost=async function(req,res){
let data=await bookModel.find({price : {$gte:100, $lte:300}}).select({ author_id: 1, _id: 0 })
let authors=[]
for(let i=0; i<data.length; i++){
 authors.push(await authorModel.findOne(data[i]).select({ author_name: 1, _id: 0 }))
}

res.send({RequiredAuthorNames : authors})
}
module.exports.createBook = createBook
module.exports.booksByChetanBhagat = booksByChetanBhagat
module.exports.findAuthorAndUpdate = findAuthorAndUpdate
module.exports.bookCost = bookCost

