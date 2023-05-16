/**
 * tab导航标签的控制器
  */
angular.module('tab.controller', ['tab.service'])
  .controller('TabCtrl', function($scope,tabFty) {
    // 绑定数据对象的值
    $scope.obj_cartCount={
      count:""
    }
    $scope.$on('$ionicView.beforeEnter', function (e) {
    var promise = tabFty.getAllData();
        promise.then(
      function (data) {
              $scope.obj_cartCount.count="0";
              for(var i =0;i<data.length;i++){
                $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
              }
      });
    });
  });
