const jwt = require("jsonwebtoken")

const authenticate = function(req, req, next) {
 let token=req.headers["x-auth-token"]
 if(!token) return res.send("Mandatory Token is missing")
 try {var decodedToken = jwt.verify(token, "Yashwant-jwt-secret-token")}
 catch(error){return res.send({ status: false, msg: "Invalid Token" })}
 if(decodedToken)
 req.setheaders[decodedToken]=decodedToken
 next()
}




const authorise = function(req, res, next) {
    let decodedToken=req.headers.decodedToken
    if(decodedToken.userId!=req.params.userId) return res.send("ERROR : Unauthorized")
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise