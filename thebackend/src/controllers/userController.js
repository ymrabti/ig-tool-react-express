const status = require('http-status');
const fetch = require('node-fetch');
const userModel = require('@models/usersModel.js');

const has = require('has-keys');

module.exports = {
    async getUserById(req, res){
        if(!has(req.params, 'id'))
            throw {code: status.BAD_REQUEST, message: 'You must specify the id'};

        let {id} = req.params;

        let data = await userModel.getOne({where: {id}});

        if(!data)
            throw {code: status.BAD_REQUEST, message: 'User not found'};

        res.json({status: true, message: 'Returning user', data});
    },
    async fetchUserByUsername(req, res){
        if(!has(req.params, 'username'))
            throw {code: status.BAD_REQUEST, message: 'You must specify the username'};
        let {username} = req.params;
        const ress = await fetch(`https://www.instagram.com/${username}/?__a=1`)
        const data = await ress.json();
        if (ress.status === 200) {
            res.json(data)
        } else {
            throw {codeServer: ress.status, message: ress.statusText};;
        }
    },
    async fetchPostByShortcode(req, res){
        if(!has(req.params, 'shortcode'))
            throw {code: status.BAD_REQUEST, message: 'You must specify the shortcode'};
        let {shortcode} = req.params;
        const ress = await fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`)
        const data = await ress.json();
        if (ress.status === 200) {
            res.json(data)
        } else {
            throw {codeServer: ress.status, message: ress.statusText};;
        }
    },
    async getUsers(req, res){
        let data = await userModel.getAll();

        res.json({status: true, message: 'Returning users', data});
    },
    async newUser(req, res){
        if(!has(req.params, ['name', 'email']))
            throw {code: status.BAD_REQUEST, message: 'You must specify the name and email'};

        let { name, email } = req.body;
        
        await userModel.create({name, email});

        res.json({status: true, message: 'User Added'});
    },
    async updateUser(req, res){
        if(!has(req.body, ['id', 'name', 'email']))
            throw {code: status.BAD_REQUEST, message: 'You must specify the id, name and email'};

        let { id, name, email } = req.body;
    
        await userModel.updateUser({name, email}, {where:{id}});

        res.json({status: true, message: 'User updated'});
    },
    async deleteUser(req, res){
        if(!has(req.params, 'id'))
            throw {code: status.BAD_REQUEST, message: 'You must specify the id'};

        let { id } = req.params;

        await userModel.destroy({where: {id}});

        res.json({status: true, message: 'User deleted'});
    }
}
