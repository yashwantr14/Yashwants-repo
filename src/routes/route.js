const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor )

router.post("/createBook", bookController.createBook )

router.post("/createPublisher", publisherController.createPublisher )

router.get("/bookDetails", bookController.bookDetails )

router.put("/books", bookController.books)

router.post("/updateRating", bookController.updateRating )



module.exports = router;