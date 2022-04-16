const {Client} = require('pg');

const config = require('../config/config.json');
(async () => {
const pool = new Client({
    host:config.PG_HOST,
    user: config.PG_USER,
    database:config.PG_DATABASE,
    password:config.PG_PASSWORD,
});

await pool.connect();

const res = await pool.query('SELECT $1::text as connected', ['Connection à la base postgres reussi!']);
  console.log(res.rows[0].connected);
  //console.log(await pool.query('SELECT * FROM fiche_examen'));
  module.exports = pool;
  
  await pool.end();
})();
