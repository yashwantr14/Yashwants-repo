const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const createUser=async function(req,res){
  let data=req.body
  let createdData=await userModel.create(data)
  res.send({status: true, Message : createdData})
}

const loginUser=async function(req,res){
   let dataProvided=req.body
   
  
   let user=await userModel.findOne({emailId:dataProvided.emailId, password:dataProvided.password})

   if(!user) return res.send("ERROR : Email or Password id incorrect")
  
   let token=jwt.sign(dataProvided, "Yashwant-jwt-secret-token")
   res.send({status:true, jwtToken: token})
}

const fetchDetails=async function(req,res){
  let userId=req.params.userId
  let user=await findById(userId)
  if(!user) return res.send("ERROR : User not found")
  res.send({status : true, user:user})
}
const updateUser=async function(req,res){
let userId=req.params.userId
let toBeUpdated=req.body
let updatedUser=await userModel.findByIdAndUpdate({userId},{toBeUpdated},{new : true})
res.send({status : true, user:updatedUser})
}

const deleteUser=async function(req,res){
  let userId=req.params.userId
  let updatedUser=await userModel.findByIdAndUpdate({$set : {isDeleted : true}},{new : true})
  res.send({status : true , updatedUser :updateUser })
}
module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.fetchDetails=fetchDetails
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser


