/*
引导页面控制器，包含业务逻辑代码
 */
angular.module('guidePage.controller',[])
  .controller('GuidePageCtrl', function ($scope,$state) {
     //当幻灯片滑动时触发的事件回调函数
      $scope.slideHasChanged=function(index){
       //
       // 将hidden类改为guide-show，显示动画效果
        var item = $("#tips-"+index);
        if(item.hasClass("hidden")){
          item.removeClass("hidden");
          item.addClass("guide-show");
        }
         //为了从后向前播放时也有动画效果,需要将播放过的页面设置为hidden
        if(index==0||index==2){
          $("#tips-1").removeClass("guide-show");
          $("#tips-1").addClass("hidden");
        } else if(index==1){
          $("#tips-0").removeClass("guide-show");
          $("#tips-0").addClass("hidden");
        }
      }
    // 跳转到主页方法
    $scope.func_goHome=function(){
      localStorage["isFirst"]=true;
      $state.go('tab.home');
    }

  })
