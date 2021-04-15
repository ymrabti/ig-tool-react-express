const status = require('http-status');
const fetch = require('node-fetch');
const userModel = require('../models/usersModel');
const has = require('has-keys');

const filterObject = require("../util/logger").filterObject;

async function statistics(collection, where, data_insert,update) {
    update.lastSearch = Date.now(); update.enabled = true
    await userModel.update(collection, where, { $inc: { clicks: +1 },$set:update })
        .then(val => {
            if (val.result.nModified == 0) {
                data_insert.enabled = true;
                userModel.create(collection, data_insert)
                    .then(val => {
                        console.log(val.result);
                    })
                    .catch(erru => {
                        console.log("error !");
                    });
            }
        })
        .catch(erru => {
            console.log("error !");
        });
}
module.exports = {
    fetchUserByUsername: async function (req, res) {
        if (!has(req.params, 'username'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the username' };
        let { username } = req.params;
        const ress = await fetch(`https://www.instagram.com/${username}/?__a=1`)
        const data = await ress.json();
        if (ress.status === 200) {
            await statistics("Users", { username }, {
                ...filterObject(data.graphql.user, (key, val) => {
                    let bool = typeof val !== "object" || val === null;
                    return bool;
                }),
                lastSearch: new Date().getTime(), clicks: 1
            }, { profile_pic_url_hd: data.graphql.user.profile_pic_url_hd})
            res.json(data);
        } else {
            await statistics("Users",{username},{},{enabled:false})
            throw { codeServer: ress.status, message: ress.statusText };;
        }
    },
    fetchPostByShortcode: async function (req, res) {
        if (!has(req.params, 'shortcode'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the shortcode' };
        let { shortcode } = req.params;
        const ress = await fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`)
        const data = await ress.json();
        if (ress.status === 200) {
            let don = data.graphql.shortcode_media;
            await statistics("Posts", { shortcode }, {
                ...filterObject(don.owner, (key, val) => {
                    let bool = typeof val !== "object" || val === null;
                    return bool;
                }),
                ...filterObject(don, (key, val) => {
                    let bool = typeof val !== "object" || val === null;
                    return bool;
                }),
                lastSearch: new Date().getTime(),
                clicks: 1
            }, {display_url:don.display_url})
            res.json(data)
        } else {
            await statistics("Posts", { shortcode }, {}, { enabled: false })
            throw { codeServer: ress.status, message: ress.statusText };;
        }
    },
    fetchHashtag: async function (req, res) {
        if (!has(req.params, 'tag'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the tag' };
        let { tag } = req.params;
        const ress = await fetch(`https://www.instagram.com/explore/tags/${tag}/?__a=1`)
        const data = await ress.json();
        if (ress.status === 200) {
            await statistics("Hashtags", { name: tag }, {
                ...filterObject(data.graphql.hashtag, (key, val) => {
                    let bool = typeof val !== "object" || val === null;
                    return bool;
                }),
                lastSearch: new Date().getTime(),
                clicks: 1
            }, {})
            res.json(data)
        } else {
            throw { codeServer: ress.status, message: ress.statusText };;
        }
    },
    fetchLocation: async function (req, res) {
        if (!has(req.params, 'location'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the location' };
        let { location } = req.params;
        const ress = await fetch(`https://www.instagram.com/explore/locations/${location}/?__a=1`)
        const data = await ress.json();
        if (ress.status === 200) {
            await statistics("Locations", { id: location }, {
                ...filterObject(data.graphql.location, (key, val) => {
                    let bool = typeof val !== "object" || val === null;
                    return bool;
                }),
                lastSearch: new Date().getTime(),
                clicks: 1
            }, {})
            res.json(data)
        } else {
            throw { codeServer: ress.status, message: ress.statusText };;
        }
    }
}
