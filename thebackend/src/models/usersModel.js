let database = require("./database");

const users = {
    async getAll() {
        const dbo = await database.getDbo();
        return await dbo.collection('customers').find().toArray();
    },
    async getOne(where) {
        const dbo = await database.getDbo();
        return dbo.collection('customers').findOne(where);
    },
    async search(where) {
        const dbo = await database.getDbo();

        return await dbo.collection('customers').find(where).toArray();
    },
    async create(good) {
        const dbo = await database.getDbo();

        delete good._id;
        delete good.id;

        return await dbo.collection('customers').insertOne(good);
    },
    async update(where, set) {
        const dbo = await database.getDbo();
        delete set._id;
        delete set.id;
        return dbo.collection('customers').findOneAndUpdate(where, { $set: set }, {});
    },
    async delete(where) {
        const dbo = await database.getDbo();

        await dbo.collection('customers').deleteOne(where);
    },
    database
}


module.exports = users;