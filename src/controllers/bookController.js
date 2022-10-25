const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({savedBooks: savedData})
}

const bookList = async function (req, res) {
    let allBooks= await BookModel.find().select({bookName : 1, authorName : 1, _id: 0 }  )
    res.send({dataRequired: allBooks})
}

const getBooksInYear = async function(req,res){
    let year=req.body.year
    let allBooks=await BookModel.find({year : year})
    res.send({dataRequired : allBooks})
}

const getParticularBooks = async function(req,res){
    let condition =req.body
    let allBooks=await BookModel.find(condition)
    res.send({dataRequired: allBooks})
}

const getXINRBooks = async function (req,res){
    let allBooks = await BookModel.find({ $or : [{"prices.indianPrice" :"100INR"},{"prices.indianPrice" :"200INR"},{"prices.indianPrice" :"500INR"}]})
    res.send({dataRequired : allBooks})
}

const getRandomBooks = async function(req,res){
    let allBooks = await BookModel.find({$or:[{stockAvailable : true},{totalPages:{$gt:500}}]})
    res.send({dataRequired : allBooks})
}

module.exports.createBook= createBook
module.exports.bookList = bookList 
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks