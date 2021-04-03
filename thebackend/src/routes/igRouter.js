const express = require('express');
const ig_router = express.Router();
const ig = require('../controllers/igController');

ig_router.get('/:username', ig.fetchUserByUsername);

ig_router.get('/p/:shortcode', ig.fetchPostByShortcode);

ig_router.get('/explore/locations/:location', ig.fetchLocation);
ig_router.get('/explore/tags/:tag', ig.fetchHashtag);

/* const all_routes = require('express-list-endpoints');
console.log("Instagram Routes :");
console.log(all_routes(ig_router)); */


module.exports = ig_router;