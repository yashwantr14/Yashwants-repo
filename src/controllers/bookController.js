const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({savedBooks: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : 1 , _id: 0 }  )
    res.send({dataRequired: allBooks})
}

const getBooksInYear = async function(req,res){
    let year=req.body
    let allBooks=await BookModel.find({year : year})
    res.send({dataRequired : allBooks})
}

const getParticularBooks = async function(req,res){
    let condition =req.query.body
    let allBooks=await BookModel.find()
}

const getXINRBooks = async function (req,res){
    let allBooks = await BookModel.find({prices(indianPrice)})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData