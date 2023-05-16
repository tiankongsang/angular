/**
 * 购物车页面控制器
 */
angular.module('cart.controller', ['cart.service'])
  .controller('CartCtrl', ['$scope', '$state','$ionicHistory','CommonJs','CartFty', function ($scope, $state,$ionicHistory,CommonJs,CartFty) {
    // 获取所有数据
    $scope.$on('$ionicView.beforeEnter', function (e) {
      func_getAllData();
    });
    // 购物车相关数据对象
    $scope.obj_cartDbData={
      data:"",
      total:0
    }
    // 获取全部数据
    function func_getAllData(){
      var promise = CartFty.getAllData();
      promise.then(
        function (data) {
          var total=0;
          // 绑定要循环生成的列表数据对象
          $scope.obj_cartDbData.data=data;
          // 计算总金额
          for(var i=0;i<data.length;i++){
            total=total+parseFloat(data[i].prise)*data[i].number*1.0;
          }
          $scope.obj_cartDbData.total=total.toFixed(2);
        },
        function (e) {
          CommonJs.AlertPopup(e);
        }
      );
    }
    // 数量加1
    $scope.func_jia1=function(id){
      var promise = CartFty.get(id);
      promise.then(
        function (data) {
          data.number++;
          func_updateData(data);
        },
        function (e) {
          CommonJs.AlertPopup(e);
        }
      ).finally(function () {
        });
    }
    // 数量减1
    $scope.func_jian1=function(id){
      var promise = CartFty.get(id);
      promise.then(
        function (data) {
          if(data.number!=1){
            data.number--;
            func_updateData(data);
          }
        },
        function (e) {
          CommonJs.AlertPopup(e);
        }
      );
    }
    // 保存数据
    function func_updateData(data){
      var promise = CartFty.updateData(data);
      promise.then(
        function () {
          func_getAllData();
        },
        function (e) {
          CommonJs.AlertPopup(e);
        }
      ).finally(function () {
        });
    }
      //删除购物车商品
      $scope.func_delete=function(id){
        var promise = CartFty.delete(id);
        promise.then(
            function () {
              func_getAllData();
            },
            function (e) {
              CommonJs.AlertPopup(e);
            }
        );
      }
    // 返回按钮方法
    $scope.func_goBack = function () {
      $ionicHistory.goBack();
    };
   //去结算跳转到商城首页
    $scope.func_goHome= function () {
      $state.go('tab.home');
    }
  }]);
