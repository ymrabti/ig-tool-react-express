const express = require('express');
const main_router = express.Router();
const root_path = process.cwd() + "../../build/";
main_router.get('/', (_req, res) => {
    console.log(__dirname, process.cwd());
    // res.sendFile(`index.html`, { root: root_path });
    res.sendFile("index.html", { dotfiles: "allow", root: root_path},(err)=>{
        console.log(err);
    });
});

/* const all_routes = require('express-list-endpoints');
console.log("Instagram Routes :");
console.log(all_routes(ig_router)); */


module.exports = main_router;