const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'C1oudP8x&2017',
    database : 'vueadmin'
});
pool.getConnection(function(err,connection){
    console.log('数据库已链接成功！')
});

module.exports = pool;
