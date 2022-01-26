const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    },
    createdAt: {
        type: 'String',
        default: Date.now()
    }
})


const UsersModel = mongoose.model('UsersModel', usersSchema)
module.exports = UsersModel