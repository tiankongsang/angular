/**
 * 商品分类模块路由
 */
angular.module('category.route', ['category.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('tab.category', {
        url: '/category',
        //指定模板页面要渲染的位置
        views: {
          'tab-category': {
            templateUrl: 'areas/category/category.html',
            controller: 'CategoryCtrl'
          }
        }
      });
  });
