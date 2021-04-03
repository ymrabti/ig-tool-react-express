require('mandatoryenv').load([
    'DB_URL',
    'PORT',
    'SECRET'
]);
const {
    DB_URL
} = process.env;


const { MongoClient, ObjectId} = require("mongodb");
let conn = new MongoClient(DB_URL, {useUnifiedTopology: true});

module.exports = {
    getDbo: async function () {
        if (!conn.isConnected())
            await conn.connect();
        return conn.db();
    },
    ObjectId
}
