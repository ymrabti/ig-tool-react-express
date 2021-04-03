const express = require('express');
const users_router = express.Router();
const user = require('../controllers/userController');

users_router.get('/:collection/search', user.getSomeUsers);
users_router.get('/:collection/:id', user.getUserById);
users_router.get('/:collection', user.getUsers);

users_router.delete('/user/:id', user.deleteUser);
users_router.post('/user', user.newUser);
users_router.put('/users', user.updateUser);

/* const all_routes = require('express-list-endpoints');
console.log("Users Routes :");
console.log(all_routes(users_router)); */

module.exports = users_router;