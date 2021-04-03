const status = require('http-status');
const fetch = require('node-fetch');
const userModel = require('../models/usersModel');

const has = require('has-keys');

module.exports = {
    fetchUserByUsername: async function (req, res) {
        if (!has(req.params, 'username'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the username' };
        let { username } = req.params;
        const ress = await fetch(`https://www.instagram.com/${username}/?__a=1`)
        const data = await ress.json();
        if (ress.status === 200) {
            await userModel.create({ username })
                .then(val => {
                    console.log(val.result.n);
                })
                .catch(erru => {
                    console.log("err");
                });
            res.json(data);
        } else {
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
            res.json(data)
        } else {
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
            res.json(data)
        } else {
            throw { codeServer: ress.status, message: ress.statusText };;
        }
    }
}
