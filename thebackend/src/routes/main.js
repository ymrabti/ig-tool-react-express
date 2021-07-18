const express = require('express');
const main_router = express.Router();
const root_path = process.cwd() + "../../thefrontend/build/";
main_router.get('/', (_req, res) => {
    console.log(__dirname, process.cwd());
    // res.sendFile(`index.html`, { root: root_path });
    res.sendFile("https://instagram.fcmn5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.51.1051.1051a/s640x640/203260459_329316965455180_8406624168592956517_n.jpg?_nc_ht=instagram.fcmn5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=VGx93tWY7XUAX-PhDY0&edm=ABfd0MgBAAAA&ccb=7-4&oh=c0e91646e43333e33b35cf6eb2e5aa20&oe=60FC1782&_nc_sid=7bff83%27%20from%20origin%20%27http://localhost:3002",{dotfiles:false},(err)=>{
        console.log(err);
    });
});

/* const all_routes = require('express-list-endpoints');
console.log("Instagram Routes :");
console.log(all_routes(ig_router)); */


module.exports = main_router;