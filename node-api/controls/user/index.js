const pool = require('../../sql/sql.js')

module.exports = {
    login : function (req,res,next){
        const user_name = req.body.user_name;
        const pass = req.body.password;
        pool.query(`select id,user_name,role from user where user_name='${user_name}'`,function(err,rows,fields){
            if (err) throw err;
            if(!rows.length){
                res.send({code:400,msg:'用户名不存在!'});
                return;
            };
            pool.query(`select password from user where user_name='${user_name}'`,function(err1,rows1,fields1){
                if (err1) throw err1;
                if(rows1[0]['password'] !== pass){
                    res.send({code:400,msg:'密码错误!'});
                    return;        
                };
                res.send({code:200,msg:'登录成功!',user:rows[0]});             
            })
            // console.log(rows)
        })
    },
    logout : function(req,res,next){
        res.send({code:200,msg:'注销'})
    },
    lists : function (req,res,next){
        const nowPage = Number(req.body.cur_page) - 1;      
        pool.query(`select create_time,id,role,update_time,user_name from user limit 10 offset ${nowPage}`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'ok',resultList:rows})
        })
    },
    delete : function (req,res,next){
        const id = req.body.id;
        pool.query(`delete from user where id=${id}`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'done'});
        })
    },
    changeRole : function(req,res,next){
        const id = req.body.id;
        const role = Number(req.body.change_role);
        pool.query(`update user set role=${role} where id=${id}`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'ok'})
        })
    },
    add : function(req,res,next){
        const user_name = req.body.name;
        const password = req.body.pass;
        const role = req.body.role;
        pool.query(`insert into user (user_name,password,role) values ('${user_name}','${password}',${role})`,function(err,rows){
            if (err) throw err;
            res.send({code:200,msg:'ok'});
        })
    }
}