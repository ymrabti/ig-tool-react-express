const express = require('express');
// const router = express.Router();


// Users routes

const igRouter = require('./igRouter');
const userRouter = require('./usersRouter');
const mainRouter = require('./main');
// router.use(require('./igRouter'));


module.exports = {
    userRouter,igRouter,express,mainRouter
};