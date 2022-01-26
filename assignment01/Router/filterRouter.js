const express = require("express")
const router = express.Router()
const {getDataByFilter} = require("../Controller/filterController")


router.post("/",getDataByFilter)

module.exports = router