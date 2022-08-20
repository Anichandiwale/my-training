const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController= require("../controllers/publishController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher", publishController.createPublisher )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook )
router.put("/book", bookController.book)

router.get("/getBooksData", bookController.getBooksData)


router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;