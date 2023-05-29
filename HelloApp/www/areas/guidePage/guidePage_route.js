/**
 * 引导页功能子路由
 */
angular.module('guidePage.route', ['guidePage.controller'])
  .config(function($stateProvider) {
    $stateProvider
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'areas/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
      })
  });
