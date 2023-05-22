/**
 * 商品分类控制器
 */
angular.module('category.controller', ['category.service'])
  .controller('CategoryCtrl', function($scope,categoryFty) {
    //进入view时触发
    $scope.$on('$ionicView.enter', function (e) {
        getCategoryData();
        $scope.getCategoryDetailData(100);
    });
      //获取侧边栏数据
    function  getCategoryData(){
      var promise =categoryFty.getCategoryData();
      promise.then(
          // 成功的回调函数
         function (data) {
            if (data) {
              $scope.categoryData = data;
            }
          });
    }
      //获取侧边菜单对应的分类信息数据
      $scope.getCategoryDetailData=function(num) {
      var promise = categoryFty.getCategoryDetailData(num);
      promise.then(
          // 成功的回调函数
         function (data) {
            if (data) {
              $scope.categoryDetailData = data;
            }
          });
    }
    // 左侧分类单击样式修改
    $scope.categoryLeftClick=function(e){
      e.target.className='nav-current';
      $(e.target).siblings().removeClass().addClass('nav-blur');
    };
  });
