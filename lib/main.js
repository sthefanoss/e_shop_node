//imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRouter = require('./routers/auth');
const shopRouter = require('./routers/shop');
const errorRouter = require('./routers/error');

//instances
const server = express();

//configurations
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, '/views'));

//middlewares
server.use(bodyParser.urlencoded({ extended: false }));

//static routes
server.use(express.static(path.join(__dirname, './public')));

//routers
server.use('/auth', authRouter);
server.use(shopRouter);
server.use(errorRouter);

//listening
server.listen(9000);