"use strict"
const express = require("express");
const bcrypt = require("bcrypt");
const dbService = require("../db/dbService");

let registerRouter = express.Router();

registerRouter.get('/', (req, res ) => {
    const db = dbService.getDbServiceInstance(); 
    res.render('register.ejs');
});

registerRouter.post('/', async (req, res ) => {
    try {
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password, 10);
        const user = { email: email, 
                        password: password };
        res.redirect('/login');
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = registerRouter;