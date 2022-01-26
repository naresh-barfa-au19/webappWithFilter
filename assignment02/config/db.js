const mongoose = require('mongoose')
const mongoUrl = "mongodb+srv://naru:naru123@cluster0.wf5rg.mongodb.net/UsersDB?retryWrites=true&w=majority"
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB is connected with UsersDB "))
  .catch((err) => console.log(err));