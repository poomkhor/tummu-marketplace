const mongoose = require('mongoose');

const url = process.env.DATABASE_URL;

mongoose.connect(url);

const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
