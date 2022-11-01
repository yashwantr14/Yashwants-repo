const publisherModel=require('../models/publisherModel')

const createPublisher=async function(req,res){
    const data=req.body
    const publisher=await publisherModel.create(data)
    res.send({RequiredPublisher : publisher })
}
module.exports.createPublisher=createPublisher