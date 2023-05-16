/**
 * 商城首页功能子路由
  */
angular.module('home.route', ['home.controller'])
  .config(function($stateProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        // 指定模板页面要渲染的位置
        views: {
          'tab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      });
  })
