const express = require("express")
const router = express.Router()
const {createSignUp,getHome} = require("../Controller/userController")


router.get("/",getHome)
router.post("/signup",createSignUp);


module.exports =  router