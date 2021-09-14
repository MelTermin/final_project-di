const Pool=require("pg").Pool;

const pool= new Pool ({
  host : '127.0.0.1',
  port: '5432',
  user : 'postgres',
  password : '16429798',
  database : 'final_project2'
});

module.exports= pool;