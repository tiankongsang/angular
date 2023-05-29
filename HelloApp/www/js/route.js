/**
 * 全局路由文件
 */
angular.module('route', [
  'guidePage.route',//引导页
  'tab.route',//导航标签页
  'home.route',//商城首页
  'category.route',//商品分类
  'goodsList.route',//商品列表
  'details.route',//商品详情
  'cart.route',//购物车
  'account.route'//个人中心
])
  .config(function($stateProvider, $urlRouterProvider) {
    // 当没有匹配到合适的路由之后默然跳转的url地址，还有就是项目默认启动的url地址
    // 判断是否是第一次访问，如果是跳转到引导页，如果不是跳转到主页
    if(localStorage["isFirst"])
    {
      $urlRouterProvider.otherwise('/tab/home');
    }
    else {
      $urlRouterProvider.otherwise('/guidePage');
    }
  });
