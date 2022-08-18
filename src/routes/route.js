const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController= require("../controllers/AuthorController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook  )
router.post("/Authorcreate", AuthorController.Authorcreate )
router.get("/getAuthourIdenty", AuthorController.getAuthourIdenty)
router.get("/updateBooks", BookController.updateBooks)
router.get("/Authorlist", AuthorController.Authorlist)


module.exports = router;