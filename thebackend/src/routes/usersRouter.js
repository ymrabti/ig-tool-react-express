const express = require('express');
const users_router = express.Router();
const user = require('../controllers/userController');

users_router.get('/:collection/search', user.getSome);
users_router.get('/:collection/:id', user.getUserById);
users_router.get('/:collection', user.getUsers);
users_router.put('/:collection', user.updateSome);

users_router.patch('/user', user.newUser);
users_router.delete('/user/:id', user.deleteUser);

/* const all_routes = require('express-list-endpoints');
console.log("Users Routes :");
console.log(all_routes(users_router)); */

module.exports = users_router;