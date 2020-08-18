//imports
const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routers/auth');
const homeRouter = require('./routers/home');

//instances
const server = express();

//middlewares
server.use(bodyParser.urlencoded({ extended: false }));

//routers
server.use(authRouter);
server.use(homeRouter);

//listening
server.listen(666);
