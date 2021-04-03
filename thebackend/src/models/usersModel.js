let database = require("./database");

const users = {
    async getAll(collection) {
        const dbo = await database.getDbo();
        return await dbo.collection(collection).find().toArray();
    },
    async getOne(collection,where) {
        const dbo = await database.getDbo();
        return dbo.collection(collection).findOne(where);
    },
    async search(collection,where,sorting) {
        const dbo = await database.getDbo();
        return await dbo.collection(collection).find(where).sort(sorting).toArray();
    },
    async create(collection,inserted) {
        const dbo = await database.getDbo();
        delete inserted._id;
        // delete inserted.id;
        return await dbo.collection(collection).insertOne(inserted);
    },
    async update(collection,where, update) {
        const dbo = await database.getDbo();
        delete update._id;
        // delete update.id;
        return await dbo.collection(collection).updateOne(where, update);
    },
    async delete(collection,where) {
        const dbo = await database.getDbo();
        await dbo.collection(collection).deleteOne(where);
    },
    database
}


module.exports = users;