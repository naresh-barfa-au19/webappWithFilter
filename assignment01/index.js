const express = require("express")
const app = express()
const cors = require('cors')
const filterRouter = require("./Router/filterRouter")


app.use(cors())
app.use(express.json())
app.use("/",filterRouter)


app.listen(4000,()=>{
    console.log(`server is running on port 4000 `)
})