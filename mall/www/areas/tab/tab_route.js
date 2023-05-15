/**
 * tab导航标签子路由
 */
angular.module('tab.route', ['tab.controller'])
  .config(function($stateProvider) {
    // $stateProvider:定义路由用的服务
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,// 加上这个属性之后就变成了抽象路由
        templateUrl: 'areas/tab/tab.html',
        controller: 'TabCtrl'
      })
  });
