const api = {
    login : '/api/user/login',//登录
    logout : '/api/user/logout',//登出

    userList : '/api/user/list',//用户列表
    userDelete : '/api/user/delete',//用户列表
    userChangeRole : '/api/user/change-role',//用户列表
    userAdd : '/api/user/add',//用户添加


    goodsList : '/api/goods/list',//商品列表
    goodsAdd : '/api/goods/add',//商品添加
    goodsDelete : '/api/goods/delete',//商品删除
    goodsDetail : '/api/goods/detail',//商品详情


    goodsTypeList : '/api/goodstype/list',//类型列表
    goodsTypeFetch : '/api/goods/fetchType',//商品添加中的类型列表
    goodsTypeDelete: '/api/goodstype/delete',//删除类型
    goodsTypeAdd : '/api/goodstype/add',//添加类型


    membersList : '/api/member/list',//会员列表
    membersAdd : '/api/member/add',//会员添加
    membersDetail: '/api/member/detail',//会员详情
    membersDelete : '/api/member/delete',//会员删除
    membersChangeRole : '/api/member/change-role',//会员变更等级


    ordersList : '/api/order/list',//订单列表
    ordersDelete : '/api/order/delete',//订单删除
}

module.exports = api;