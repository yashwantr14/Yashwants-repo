const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", middleware.authantication, userController.getUserData)

router.put("/users/:userId", middleware.authantication, userController.updateUser)

router.delete("/deleteUser/:userId", middleware.authantication, userController.deleteUser)

module.exports = router;