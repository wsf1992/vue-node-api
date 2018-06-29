const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'vueadmin'
});
pool.getConnection(function(err,connection){
    console.log('数据库已链接成功！')
});

module.exports = pool;
