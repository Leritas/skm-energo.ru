const { Pool } = require('pg');
const password = require('./pass.js')


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'skmenergo',
    password: password,
    port: 5432,
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
})

module.exports = pool