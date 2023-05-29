/**
 * 商品详情模块路由
 */
// angular.module('details.route', ['details.controller'])
//   .config(function ($stateProvider) {
//     $stateProvider
//       .state('details', {
//         url: '/details/:productId',
//         templateUrl: 'areas/details/details.html',
//         controller: 'DetailsCtrl'
//       });
//   });

// angular.module('details.route', ['details.controller'])
// .config(function ($stateProvider) {
//   $stateProvider
//     .state('details', {
//       url: '/details/4',
//       templateUrl: 'areas/details/details.html',
//       controller: 'DetailsCtrl'
//     });
// });

angular
  .module("details.route", ["details.controller"])
  .config(function ($stateProvider) {
    $stateProvider
      .state("details4", {
        url: "/details/4",
        templateUrl: "areas/details/details4.html",
        controller: "DetailsCtrl",
      })
      .state("details5", {
        url: "/details/5",
        templateUrl: "areas/details/details5.html",
        controller: "DetailsCtrl",
      })
      .state("details6", {
        url: "/details/6",
        templateUrl: "areas/details/details6.html",
        controller: "DetailsCtrl",
      })
      .state("details7", {
        url: "/details/7",
        templateUrl: "areas/details/details7.html",
        controller: "DetailsCtrl",
      })
      .state("details8", {
        url: "/details/8",
        templateUrl: "areas/details/details8.html",
        controller: "DetailsCtrl",
      })
      .state("details9", {
        url: "/details/9",
        templateUrl: "areas/details/details9.html",
        controller: "DetailsCtrl",
      })
      .state("details10", {
        url: "/details/10",
        templateUrl: "areas/details/details9.html",
        controller: "DetailsCtrl",
      });
  });
