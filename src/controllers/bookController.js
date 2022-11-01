const { Router } = require("express")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
var ObjectId = require('mongoose').Types.ObjectId

const createBook= async function (req, res) {
    let book = req.body
    let author=book.author

    if(!author) return res.send("Author is required")
    if(!ObjectId.isValid(author)) return res.send("Author is not valid")
    let authorId=await authorModel.findById(author)
    if(!authorId)return res.send("Author is not present")

    

    let publisher=book.publisher
    if(!publisher) return res.send("Publisher is required")
    if(!ObjectId.isValid(publisher)) return res.send("Publisher is not valid")
    let publisherId=await publisherModel.findById(publisher)
    if(!publisherId)return res.send("Publisher is not present")
    
    
    let bookCreated = await bookModel.create(book)
     return res.send({data: bookCreated})
     
}


const bookDetails=async function(req,res){
    const bookDetails=await bookModel.find().populate('author').populate('publisher')
    res.send({bookDeatils : bookDetails})
}

const books=async function(req,res){


        let publisher=await publisherModel.find({name:{$in: ["Penguin","HarperCollins"]}})
        
       let publishId=[]
        for(let i = 0; i<publisher.length; i++)  publishId.push(publisher[i]._id)
        
        for(let i=0; i<publishId.length; i++)   
        
        var toSend=await bookModel.updateMany({publisher: publishId[i] }, {isHardCover : true}, {new : true})
        
        res.send({ mes: toSend })
}



const updateRating = async function (req, res) {
let author=await authorModel.find({rating:{$gt : 3.5}})
let authId=[]
for(let i = 0; i<author.length; i++)  authId.push(author[i]._id)

for(let i=0; i<authId.length; i++)   

var toSend=await bookModel.updateMany({author: authId[i] },  { $inc: { price: 10 } }, {new : true})

res.send({ mes: toSend })
}
module.exports.createBook=createBook
module.exports.bookDetails=bookDetails
module.exports.books=books
module.exports.updateRating = updateRating