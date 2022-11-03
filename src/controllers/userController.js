
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createUser = async function (req, res) {
  let data = req.body
  let savedData = await userModel.create(data)
  res.send({ msg: savedData })
}

const loginUser = async function (req, res) {
  let userName = req.body.emailId
  let password = req.body.password
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    })

  let token = jwt.sign({userId: user._id.toString()},"functionup-lithium-trainee-yashwant-secret-key")    
  res.setHeader("x-auth-token", token)
  res.send({ status: true, token: token })
}

const getUserData = async function (req, res) {

    let userId = req.params.userId
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
    res.send({ status: true, data: userDetails });
 
}

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findByIdAndUpdate(userId, userData, {new : true});
  return res.send({ status: true, data: updatedUser });
};

const deleteUser=async function(req,res){
  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
 
    if (!user) {
      return res.send("No such user exists");
    }

let deletedData=await userModel.findByIdAndUpdate(userId, {$set : {isDeleted:true}}, {new : true})

 return res.send({status : true , deletedData})
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;