const status = require('http-status');
const userModel = require('../models/usersModel');
const database = userModel.database;

const has = require('has-keys');

module.exports = {
    getUsers: async function (_req, res) {
        let data = await userModel.getAll();
        res.json(data);
    },
    getSomeUsers: async function (req, res) {
        let reqbody = req.query;
        if (Object.keys(reqbody).length == 0) {
            res.json(
                {
                    code: status.BAD_REQUEST,
                    message: 'You must specify at least one argument!'
                }
            );
        }
        await userModel.search(reqbody)
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
    },
    getUserById: async function (req, res) {
        if (!has(req.params, 'id'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the id' };
        let { id } = req.params;
        await userModel.getOne({ _id: new database.ObjectId(id) })
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
    },
    newUser: async function (req, res) {
        if (Object.keys(req.body).length == 0) {
            throw { code: status.BAD_REQUEST, message: 'You must specify at least one argument!' };
        }
        await userModel.create(req.body)
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
    },
    updateUser: async function (req, res) {
        if (!has(req.body, ['_id'])) {
            throw { code: status.BAD_REQUEST, message: 'You must specify the _id' };
        }
        let { _id, set } = req.body;
        userModel.update({ _id: new database.ObjectId(_id) }, set)
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
        // res.json({ status: true, message: 'User updated' });
    },
    deleteUser: async function (req, res) {
        if (!has(req.params, 'id'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the id' };

        let { id } = req.params;

        await userModel.delete({ _id: new database.ObjectId(id) })
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
    }
}
