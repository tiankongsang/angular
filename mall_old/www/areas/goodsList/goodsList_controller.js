/**
 * 商品列表页面控制器
 */
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('GoodsListCtrl', function ($scope,GoodsListFty, $stateParams,$ionicLoading, $ionicHistory) {
    // 和前台页面绑定的数据对象
    $scope.obj_goodsListData = [];
    // 判断有没有更多数据可以加载
    $scope.pms_isMoreItemsAvailable=true;
    // 分页查询对象
    $scope.obj_pagingInfo = {
      pageNum: 1,// 当前页码
      pageSize: 6, // 每页显示的数量
      typeNumber:""//用于存放商品分类传递过来的商品分类编号
    };
    // 下拉刷新数据的方法
    $scope.func_refreshGoodsList=function(){
      // 修改分页信息对象
      $scope.obj_pagingInfo.pageNum=1;
      //接收商品分类传递过来的参数typeNumber，放到分页信息对象中传递给Service
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      var message=JSON.stringify($scope.obj_pagingInfo);
      var promise = GoodsListFty.refreshGoodsList(message);
      promise.then(
        // 成功的回调函数
        function (data) {
          if(data){
            $scope.pms_isMoreItemsAvailable=true;
            $scope.obj_goodsListData=data;
          }
        },
        // 失败的回调函数
        function (reason) {
          console.log(reason);
        }
      ).finally(function() {
        // 停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
    // 上拉加载更多数据的方法
    $scope.func_loadMoreGoodsList=function(){
      //显示载入指示器
      $ionicLoading.show({
        template: '正在请求数据...'
      });
      // 修改分页信息对象，并把数据变为字符串传递到service
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      $scope.obj_pagingInfo.pageNum++;
      var message=JSON.stringify($scope.obj_pagingInfo);
      var promise = GoodsListFty.loadMoreGoodsList(message);
      promise.then(
        // 成功的回调函数
        function (data) {
          // 判断返回来是否有数据，代码健壮性判断
          if(data){
            //模拟第加载2次上拉加载后就没有更多数据了
            if($scope.obj_pagingInfo.pageNum==3){
              $scope.pms_isMoreItemsAvailable=false;
            }
            $.each(data, function (i, item) {
              $scope.obj_goodsListData.push(item);
            });
          }
        },
        // 失败的回调函数
        function (reason) {
          console.log(reason);
        }
      ).finally(function() {
        // 停止广播
        $scope.$broadcast('scroll.infiniteScrollComplete');
        setTimeout(function(){
          //关闭载入指示器
          $ionicLoading.hide();
        },2000);
      });
    }
    // 返回前一个页面
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }
  });
