const express = require('express');
const router = express.Router();
const user = require('@controllers/userController.js');

router.get('/:username', user.fetchUserByUsername);

router.get('/p/:shortcode', user.fetchPostByShortcode);

router.get('/explore/locations/:location', user.fetchLocation);
router.get('/explore/tags/:tag', user.fetchHashtag);


router.get('/api/users/:id', user.getUserById);
router.get('/api/users', user.getUsers);

router.post('/api/users', user.newUser);

router.delete('/users/:id', user.deleteUser);

router.put('/api/users', user.updateUser);


module.exports = router;