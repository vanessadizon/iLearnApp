"use strict"
// require("dotenv").config();

const express = require("express");
const jwt = require('jsonwebtoken');

let loginRouter = express.Router();

const posts = [
    { username: "Vanessa", title: "Title Uno" },
    { username: "Jef", title: "Title Dos" }
];

loginRouter.get('/', (req, res ) => {
    return res.render('login.ejs');
});

// loginRouter.get('/', authenticateToken, (req, res ) => {
//     return res.json(posts.filter(post => post.username === req.user.name));
// });

loginRouter.post('/', (req, res ) => {
    // const username = req.body.username;
    // const user = { name: username };
    // const ACCESS_TOKEN = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY);
    // res.json({accessToken: ACCESS_TOKEN});
});

function authenticateToken(req, res, next ) {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    // if(token == null) {
    //     return res.sendStatus(401);
    // }

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    //     if(err) {
    //         return res.sendStatus(403);
    //     }
    //     req.user = user;
    //     next();
    // })
}

module.exports = loginRouter;