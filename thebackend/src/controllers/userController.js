const status = require('http-status');
const userModel = require('../models/usersModel');
const database = userModel.database;
const has = require('has-keys');

const filterObject = require("../util/logger").filterObject;

function GetFilename(url) {
    let list = url.split('\\');
    return list[list.length - 1];
}

module.exports = {
    getUsers: async function (req, res) {
        if (!has(req.params, ['collection']))
            throw { code: status.BAD_REQUEST, message: 'You must specify the collection' };
        let { collection } = req.params;
        let data = await userModel.getAll(collection);
        res.json(data);
    },
    getSomeUsers: async function (req, res) {
        if (!has(req.params, ['collection']))
            throw { code: status.BAD_REQUEST, message: 'You must specify the collection' };
        let reqbody = req.query;
        if (Object.keys(reqbody).length == 0) {
            res.json(
                {
                    code: status.BAD_REQUEST,
                    message: 'You must specify at least one argument!'
                }
            );
        }
        let { collection } = req.params;
        // var url = `https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc&page=${this.pageShouldLoaded}`;
        let { sort, order, page } = req.query;
        let sorting = {};
        if (sort) {
            sorting[sort] = order.toLowerCase() === "desc" ? -1 : 1;
        }
        
        // console.log(sorting);
        let where = filterObject(reqbody, (key, val) => {
            let bool = !["sort", "order", "page"].includes(key);
            return bool;
        })
        // console.log(where);
        where.enabled= true
        await userModel.search(collection, where, sorting, page)
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
    },
    getUserById: async function (req, res) {
        if (!has(req.params, ['id', 'collection']))
            throw { code: status.BAD_REQUEST, message: 'You must specify the id,and the collection' };
        let { id, collection } = req.params;
        await userModel.getOne(collection, { _id: new database.ObjectId(id) })
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
    },
    newUser: async function (req, res) {
        /* if (Object.keys(req.body).length == 0) {
            throw { code: status.BAD_REQUEST, message: 'You must specify at least one argument!' };
        } */
        /* let filesMoved = {};
        Object.values(req.files).forEach(function (item, index) {
            var oldpath = item.path;let filename = GetFilename(item.path);
            var newpath = process.cwd() + "\\images\\" + filename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) {console.log(err);};
                filesMoved["fileno"+(index+1)] = filename;
            });
        }); */
        await res.json(req.files);
        // res.json(Object.values(req.files).map(item => (
        //     {
        //         oldpath: item.path,
        //         newpath: process.cwd()+"\\" + GetFilename(item.path)
        //     }
        // )));
        // res.json(req.files);

        /* await userModel.create("Statistics",req.body)
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            }); */
    },
    updateUser: async function (req, res) {
        if (!has(req.body, ['_id'])) {
            throw { code: status.BAD_REQUEST, message: 'You must specify the _id' };
        }
        let { _id, set } = req.body;
        await userModel.update("Statistics", { _id: new database.ObjectId(_id) }, { $set: set })
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

        await userModel.delete("Statistics", { _id: new database.ObjectId(id) })
            .then(val => {
                res.json(val);
            })
            .catch(erru => {
                res.json(erru);
            });
    }
}
