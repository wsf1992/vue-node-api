var express = require('express');
var router = express.Router();

const api = require('../api.js');

const user = require('../controls/user/index.js');
const good = require('../controls/goods/index.js');
const type = require('../controls/goodstype/index.js');
const member = require('../controls/members/index.js');
const order = require('../controls/orders/index.js');

/* GET home page. */

// 用户router
router.post(api.login,user.login); //登录
router.get(api.logout,user.logout); //注销
router.post(api.userList,user.lists);
router.post(api.userDelete,user.delete);
router.post(api.userChangeRole,user.changeRole);
router.post(api.userAdd,user.add);

// 商品
router.post(api.goodsList,good.lists)
router.post(api.goodsDelete,good.delete)
router.post(api.goodsAdd,good.add)
router.post(api.goodsDetail,good.detail)

//类型
router.post(api.goodsTypeList,type.lists)
router.post(api.goodsTypeFetch,type.fetch)
router.post(api.goodsTypeDelete,type.delete)
router.post(api.goodsTypeAdd,type.add)

//会员
router.post(api.membersList,member.lists)
router.post(api.membersAdd,member.add)
router.post(api.membersDetail,member.detail)
router.post(api.membersDelete,member.delete)
router.post(api.membersChangeRole,member.changeRole)

//订单
router.post(api.ordersList,order.lists)
router.post(api.ordersDelete,order.delete)


module.exports = router;
