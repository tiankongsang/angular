/**
 * 详细页面控制器
 */
angular.module('details.controller', ['details.service'])
  .controller('DetailsCtrl', function($scope,$stateParams,$ionicHistory,DetailsFty,CommonJs) {
    // 购物车徽章位置显示的数量
    $scope.obj_cartCount = {
      count: "0"
    }
    // 当详细页面激活之前获取购物车里面的商品数量，如果有就将给赋值
    $scope.$on('$ionicView.beforeEnter', function (e) {
      var promise = DetailsFty.getAllData();
      promise.then(
        function (data) {
          for(var i =0;i<data.length;i++){
            $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
          }
        },
        function (e) {
          CommonJs.AlertPopup(e);
        }
      )
    });
    // 模拟通过后台获取到的商品详细信息数据
     $scope.obj_goodsInfo = {
        goodsId: "200067",
        description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
        prise: "169",
        picture: [],
        src: "",
        isFork: false,
        colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
        sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
      };
      /**
       * 数据字典
       * name:number
       * 红色:1  蓝色:2 黄色:3
       */
    // 用户选择信息
    $scope.obj_goodsDetailInfo = {
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork: $scope.obj_goodsInfo.isFork,
      description: $scope.obj_goodsInfo.description,
      src: $scope.obj_goodsInfo.src,
      prise: $scope.obj_goodsInfo.prise,
      color: "",
      size: "",
      number: 1
    }
    // 加入到购物车方法
    $scope.func_addToCart=function(){
      var obj_newData={};
      // 深拷贝方法
      angular.copy($scope.obj_goodsDetailInfo,obj_newData);
      // 重新改变编号
      obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;
      var promise = DetailsFty.get( obj_newData.goodsId );
      promise.then(
          function (data) {
            if(data){
              obj_newData.number=data.number+obj_newData.number;
            }
            func_updateData(obj_newData);
            $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
          },
          function (e) {
            CommonJs.AlertPopup(e);
          }
      );
    }
      // 数量加1
      $scope.func_jia1 = function () {
        $scope.obj_goodsDetailInfo.number++;
      }
      // 数量减1
      $scope.func_jian1 = function () {
        if ($scope.obj_goodsDetailInfo.number != 1) {
          $scope.obj_goodsDetailInfo.number--;
        }
      }
    // 返回前一个页面
      $scope.func_goBack=function(){
        $ionicHistory.goBack();
      }
    // 保存数据
    function func_updateData(data){
      var promise = DetailsFty.updateData(data);
      promise.then(function () {
          CommonJs.AlertPopup("添加购物车成功");
        },
        function (e) {
          CommonJs.AlertPopup(e);
        }
      );
    }
  });
