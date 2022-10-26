const authorModel=require("../models/authorModel")

const createAuthor= async function(req,res){
    let data=req.body
    let savedAuthor=await authorModel.create(data)
    res.send({MESSAGE : savedAuthor})
}
module.exports.createAuthor=createAuthor