
var express = require('express');
var router = express.Router();
const fs = require('fs');

var iconv = require('iconv-lite');
const pool = require('../../sql/sql.js');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


//上传
router.post('/api/posts/',upload.single('file'),function(req,res,next){
    console.log(req.file)
    const oldPath = req.file.path;
    const ext = req.file.originalname.split('.')[1];
    fs.rename(oldPath,oldPath+'.'+ext,function(err){
        if(err) throw err;
        fs.readFile(oldPath+'.'+ext,'binary',function(err1,date){
            if(err1) throw err1; 
            let date1 = new Buffer(date,'binary');
            let date2 = iconv.decode(date1,'GBK')
            let arr = date2.split('\r\n');
            arr.forEach(function(ele,index){
                if(!ele){
                    arr.splice(index,1)
                }
            });
            let arr2 = [];
            arr.forEach(function(ele,index){
                arr2[index] = ele.split(',')
            });
            arr2.shift();
            arr2.forEach(function(ele,index){
                pool.query(`insert into user (user_name,password,role) values ('${ele[0]}','${ele[1]}',${Number(ele[2])})`,function(err,rows){
                    if(err) throw err;
                })
            });
            // res.send(arr2);               
            
        })
        res.send('ok')
        
    })
})


module.exports = router;