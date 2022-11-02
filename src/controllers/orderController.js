const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
var ObjectId = require('mongoose').Types.ObjectId




const createOrder=async function(req,res){
    var body = req.body
    var userId=body.userId
    var productId=body.productId
    var headers=req.headers
    var isFreeAppUser=headers["isfreeappuser"]
    
    if(!userId) return res.send("User is required")
    if(!ObjectId.isValid(userId)) return res.send("User is not valid")
    let user=await userModel.findById(userId)
    if(!user)return res.send("User is not present")


    if(!productId) return res.send("Product is required")
    if(!ObjectId.isValid(productId)) return res.send("Product is not valid")
    let product=await productModel.findById(productId)
    if(!product)return res.send("Product is not present")

    if(isFreeAppUser=="false")
    {
        var productPrice=await productModel.findById(productId).select({'price' : 1, _id : 0})
        var userBalance = await userModel.findById(userId).select({'balance':1, _id : 0})
     
    
        if(productPrice.price>userBalance.balance) res.send("Insufficient balance")
        else{
            var paidUserId=await userModel.findById(userId).select({'_id': 1, _v:0})
            var deductBalance=await userModel.updateOne({_id : paidUserId._id}, {$inc : {balance : -(productPrice.price)}})
            body.amount=productPrice.price
            body.isFreeAppUser=false
            var orderCreated=await orderModel.create(body)
            res.send({"Order placed" : orderCreated})
        }
        
    }else{
        
        var freeUserId= await  orderModel.updateOne({isFreeAppUser: true}, {$set :{amount : 0}, $set : {isFreeAppUser : true}})
        body.amount=0
        body.isFreeAppUser=true
        var ordercreated2=await orderModel.create(body)
        res.send({"order" : ordercreated2})
    
    }



    /*let orderCreated = await orderModel.create(body)
    res.send({"Product has been created" : productCreated})*/
    }


module.exports.createOrder=createOrder