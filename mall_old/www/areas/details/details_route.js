/**
 * 商品详情模块路由
 */
angular.module('details.route', ['details.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('details', {
        url: '/details/:productId',
        templateUrl: 'areas/details/details.html',
        controller: 'DetailsCtrl'
      });
  });
