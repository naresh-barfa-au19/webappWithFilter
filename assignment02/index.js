const express = require("express")
const app = express()
require("./config/db")
const userRouter = require("./Router/userRouter")


app.use(express.json())
app.use("/",userRouter)


app.listen(5000,()=>{
    console.log(`server is running on port 5000 `)
})