require('module-alias/register');// Register module/require aliases
const {inject, errorHandler} = require('express-custom-error');
inject(); // Patch express in order to use async / await syntax
const express = require('./routes/router').express;// const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('../src/util/logger');
require('mandatoryenv').load([// Load .env Enviroment Variables to process.env
    'DB_URL',
    'PORT',
    'SECRET'
]);
const { PORT } = process.env;

const app = express();// Instantiate an Express Application

const formData = require("express-form-data");
const os = require("os");// Patches
const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
};
app.use(formData.parse(options));// parse data with connect-multiparty. 
app.use(formData.format());// delete from the request all empty files (size == 0)
app.use(formData.stream());// change the file objects to fs.ReadStream 
app.use(formData.union());// union the body and the files
// server/index.js

// Configure Express App Instance
app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));
// Configure custom logger middleware
app.use(logger.dev, logger.combined);
app.use(cookieParser());
app.use(cors());
app.use(helmet());
// This middleware adds the json header to every response
// const path = require('path');app.use(express.static(path.resolve(__dirname, '../../build')));
app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');next();
    // res.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
    // res.sendFile(path.resolve(__dirname, '../images', 'X9PXXGnojz_101uDYBZ_c23V.jpg'));
})

// Assign Routes
const Routers = require('./routes/router.js');
app.use('/instagram', Routers.igRouter);
app.use('/api', Routers.userRouter);
app.use('/', Routers.mainRouter);

// Handle errors
app.use(errorHandler());

// Handle not valid route
app.use('*', (_req, res) => {
    res
    .status(404)
    .json( {status: false, message: 'Endpoint Not Found'} );
})

// Open Server on selected Port
app.listen(
    PORT,
    () => {
        const all_routes = require('express-list-endpoints');
        console.log("global routes :");
        console.log(all_routes(app));
        console.info('Server listening on port ', PORT);
    }
);