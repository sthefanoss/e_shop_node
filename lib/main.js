//imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRouter = require('./routers/auth');
const homeRouter = require('./routers/home');
const errorRouter = require('./routers/error');

//instances
const server = express();

//middlewares
server.use(bodyParser.urlencoded({ extended: false }));

//static routes
server.use(express.static(path.join(__dirname,'./public')));

//routers
server.use('/admin', authRouter);
server.use(homeRouter);
server.use(errorRouter);

//listening
server.listen(666);
