const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MW=require("../middleware/auth")

router.post("/createUser", userController.createUser)

router.post("/loginUser", userController.loginUser)

router.get("/fetchDetails/:userId", MW.authenticate, MW.authorise, userController.fetchDetails)

router.put("/updateUser/:userId", MW.authenticate, MW.authorise, userController.updateUser)

router.delete("/deleteUser/:userId", MW.authenticate, MW.authorise, userController.deleteUser)

module.exports = router;