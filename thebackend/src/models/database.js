require('mandatoryenv').load([
    'DB_URL',
    'PORT',
    'SECRET'
]);
const {
    DB_URL
} = process.env;
// mongodb://127.0.0.1:27017/IGTOOL
// mongodb+srv://ymrabti:4CVUsBRBaIFJt5EZ@cluster0.guzvv.mongodb.net/IGTOOL?retryWrites=true&w=majority
const { MongoClient, ObjectId} = require("mongodb");
let conn = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// console.log(conn);

// var mongoose = require("mongoose");mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    getDbo: async function () {
        if (!conn.isConnected())
            conn.connect((evt) => { console.log(evt); });
        return conn.db();
    },
    ObjectId
}
