const express = require('express');

const server = express();
const users = require("./routes/users");
const login = require("./routes/login");
const register = require("./routes/register");

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/users", users);
server.use("/login", login);
server.use("/register", register);

server.set('view-engine', 'ejs');

const port = 3000 || process.env.port;

server.listen(port, () => { console.log(`Listening on port ${port}...`)});