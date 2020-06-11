const { Pool } = require("pg");

const myURI = 'postgres://vkqxstve:0sb4IW9QnzaY6iPEuPkyzgkiYcBHVMR4@ruby.db.elephantsql.com:5432/vkqxstve'

const URI = process.env.PG_URI || myURI

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;
