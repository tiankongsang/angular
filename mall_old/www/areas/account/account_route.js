/**
 * 个人中心页面路由
 */
angular.module('account.route', ['account.controller'])
  .config(function($stateProvider) {
    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'areas/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      });
  });
