const config = require('../config/config.json');

const {Pool, Client} = require('pg')

const sql = new Pool({
    host:config.PG_HOST,
    user: config.PG_USER,
    database:config.PG_DATABASE,
    password:config.PG_PASSWORD,
})