const jwt = require("jsonwebtoken")
const authantication=function(req,res,next){
    let token = req.headers["x-auth-token"]
    if (!token) 
    return res.send({ status: false, msg: "token must be present" })
    try {var decodedToken = jwt.verify(token, "functionup-lithium-trainee-yashwant-secret-key")}
    catch(error){return res.send({ status: false, msg: "token is invalid" })}
    if(decodedToken) next()
}
module.exports.authantication=authantication