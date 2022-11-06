const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const authenticate = function(req, res, next) {
 let token=req.headers["x-auth-token"]
 if(!token) return res.send("Mandatory Token is missing")
 try {var decodedToken = jwt.verify(token, "Yashwant-jwt-secret-token")}
 catch(error){return res.send({ status: false, msg: "Invalid Token" })}
 if(decodedToken)
 req.headers["x-auth-token"]=decodedToken
 next()
}




const authorise = async function(req, res, next) {
    let decodedToken=req.headers['x-auth-token']
    let userId=req.params.userId
    let user = await userModel.findById(userId)
    if(decodedToken.emailId!=user.emailId) return res.send("ERROR : Unauthorized")
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise