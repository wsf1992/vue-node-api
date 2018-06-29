const pool = require('../../sql/sql.js')

module.exports = {
    lists : function (req,res,next){
        const nowPage = Number(req.body.cur_page) - 1;
        const name = req.body.member_name;
        const state = req.body.state;
        let sql = '';        
        if(name){
            sql = `select * from orders where goods_name='${name}' limit 10 offset ${nowPage*10}`;
        }else{
            sql = `select * from orders limit 10 offset ${nowPage*10}`
        }
        pool.query(sql,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'ok',resultList:rows})
        })
    },
    // add : function(req,res,next){
    //     const member_name = req.body.member_name;
    //     const member_phone = req.body.member_phone;
    //     const recommendation_code = req.body.recommendation_code;//推荐码
    //     const membership_level = req.body.membership_level;//会员等级
    //     const member_address1 = req.body.member_address1;
    //     const member_address2 = req.body.member_address2;
    //     const member_address3 = req.body.member_address3;
    //     const remarks = req.body.remarks;
    //     let id = req.body.members_id;
    //     if(id){ //修改
    //         pool.query(`update members set member_name='${member_name}',member_phone='${member_phone}',recommendation_code='${recommendation_code}',membership_level=${membership_level},member_address1='${member_address1}',member_address2='${member_address2}',member_address3='${member_address3}',remarks='${remarks}' where members_id=${id}`,function(err,rows){
    //             if(err) throw err;
    //             res.send({code:200,msg:'done'})
    //         })
    //     }else{  //添加
    //         pool.query(`insert into members (member_name,member_phone,recommendation_code,membership_level,member_address1,member_address2,member_address3,remarks) values ('${member_name}','${member_phone}','${recommendation_code}',${membership_level},'${member_address1}','${member_address2}','${member_address3}','${remarks}')`,function(err,rows){
    //             if(err) throw err;
    //             res.send({code:200,msg:'done'})
    //         })
    //     }

    // },
    delete : function(req,res,next){
        const id = req.body.order_id;
        pool.query(`delete from orders where order_id=${id}`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'done'})
        })
    },
    // detail : function(req,res,next){
    //     const id = req.body.members_id;
    //     pool.query(`select * from members where members_id=${id}`,function(err,rows){
    //         if(err) throw err;
    //         res.send({code:200,msg:'ok',resultList:rows[0]})
    //     })
    // },
}