const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController=require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

router.post("/createProduct", productController.createProduct)

router.post("/createUser", commonMW.isFreeAppUser, UserController.createUser )

router.post("/orderPurchase", commonMW.isFreeAppUser, orderController.createOrder )

module.exports = router;

