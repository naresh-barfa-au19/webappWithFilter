const UsersModel = require("../Model/userModel")
const nodemailer = require('nodemailer');

const emailSender = async (email) => {
    const transporter = nodemailer.createTransport({
        host: "user123@gmail.com", // your email 
        port: 587,
        secure: false,
        service: 'gmail',
        auth: {
            user: 'user123@gmail.com', // your email 
            pass: '*******' // your email id password
        }
    });

    const mailOptions = {
        from: 'user123@gmail.com', // your email 
        to: email,          // email of client
        subject: 'Welcome for sign up',
        text: 'You are Welcome to sign up to this application'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

exports.getHome = async (req, res) => {
    try {
        res.send("welcome")
    } catch (err) {
        console.log(err)
    }
}

exports.createSignUp = async (req, res) => {
    try {
        const insertData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
        await UsersModel.insertMany(insertData)
        await emailSender(req.body.email)
        res.send({
            success: true,
            message: "Welcome message send to " + req.body.email
        })
    } catch (err) {
        console.log(err)
    }
}