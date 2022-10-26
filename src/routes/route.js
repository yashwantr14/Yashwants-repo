const express = require('express');
const router = express.Router();
const bookController=require('../controllers/bookController')
const authorController=require('../controllers/authorController')

router.post('/createBook', bookController.createBook)
router.post('/createAuthor', authorController.createAuthor)
router.get('/booksByChetanBhagat', bookController.booksByChetanBhagat )
router.get('/findAuthorAndUpdate', bookController.findAuthorAndUpdate )
router.get('/bookCost', bookController.bookCost )





module.exports = router;