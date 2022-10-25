const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/getBooksInYear", BookController.createBook  )



module.exports = router;