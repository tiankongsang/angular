/**
 * 购物车模块路由
 */
angular.module('cart.route', ['cart.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'areas/cart/cart.html',
        controller: 'CartCtrl'
      });
  });
