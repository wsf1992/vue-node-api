const pool = require('../../sql/sql.js')

module.exports = {
    lists : function (req,res,next){
        const nowPage = Number(req.body.cur_page) - 1;
        const name = req.body.goods_name;
        let sql = '';        
        if(name){
            sql = `select * from goods where goods_name like '%${name}%' limit 10 offset ${nowPage}`;
        }else{
            sql = `select * from goods limit 10 offset ${nowPage}`
        }
        pool.query(sql,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'ok',resultList:rows})
        })
    },
    add : function(req,res,next){
        const name = req.body.goods_name;
        const price = req.body.goods_price;
        const inventory = req.body.inventory;//库存
        const goods_typename = req.body.goods_typename;
        const onsale = req.body.onsale;//是否上架
        const goods_details = req.body.goods_details;
        const imgs = req.body.imgs;
        const id = req.body.goods_id;
        if(id){ //修改
            pool.query(`update goods set goods_name='${name}',goods_price=${price},inventory=${inventory},goods_typename='${goods_typename}',onsale=${onsale},goods_details='${goods_details}',imgs='${imgs}' where goods_id=${id}`,function(err,rows){
                if(err) throw err;
                res.send({code:200,msg:'done'})
            })
        }else{  //添加
            pool.query(`insert into goods (goods_name,goods_price,inventory,goods_typename,onsale,goods_details,imgs) values ('${name}',${price},${inventory},'${goods_typename}',${onsale},'${goods_details}','${imgs}')`,function(err,rows){
                if(err) throw err;
                res.send({code:200,msg:'done'})
            })
        }

    },
    delete : function(req,res,next){
        const id = req.body.goods_id;
        pool.query(`delete from goods where goods_id=${id}`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'done'})
        })
    },
    detail : function(req,res,next){
        const id = req.body.goods_id;
        pool.query(`select * from goods where goods_id=${id}`,function(err,rows){
            if(err) throw err;
            res.send({code:200,msg:'ok',resultList:rows[0]})
        })
    },
}