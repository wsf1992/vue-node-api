const pool = require('../../sql/sql.js')

module.exports = {
    lists : function (req,res,next){
        const nowPage = Number(req.body.cur_page) - 1;
        const name = req.body.goods_typename;
        let sql = '';
        if(name){
            sql = `select * from goodstype where goods_typename like '%${name}%' limit 10 offset ${nowPage}`;
        }else{
            sql = `select * from goodstype limit 10 offset ${nowPage}`
        }
        pool.query(sql,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'ok',resultList:rows})
        })
    },
    fetch : function (req,res,next){
        pool.query(`select * from goodstype`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'ok',resultList:rows})
        })
    },
    delete : function (req,res,next){
        const good_type = req.body.goods_type;
        pool.query(`delete from goodstype where goodstype=${good_type}`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'done'})
        })
    },
    add : function (req,res,next){
        const goods_typename = req.body.goods_typename;
        const remarks = req.body.remarks;
        pool.query(`insert into goodstype (goods_typename,remarks) values ('${goods_typename}','${remarks}')`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'done'})
        })
    },
}