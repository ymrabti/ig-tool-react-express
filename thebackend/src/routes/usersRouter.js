const express = require('express');
const users_router = express.Router();
const user = require('../controllers/userController');

users_router.get('/user/:id', user.getUserById);
users_router.delete('/user/:id', user.deleteUser);
users_router.post('/user', user.newUser);

users_router.get('/users', user.getUsers);
users_router.get('/users/search', user.getSomeUsers);
users_router.put('/users', user.updateUser);

/* const all_routes = require('express-list-endpoints');
console.log("Users Routes :");
console.log(all_routes(users_router)); */

module.exports = users_router;