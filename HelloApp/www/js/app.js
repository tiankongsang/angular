/**
 * 项目启动文件
 */
angular.module('starter', ['ionic','route','config','ionicLazyLoad','indexdb','commonJs','ngCordova'])
.run(function($ionicPlatform,$location,$ionicHistory,$cordovaToast,$rootScope) {
  $ionicPlatform.ready(function() {
    // 下面两个if语句是ionic项目模板代码，无需修改
    //表单输入时默认隐藏键盘上的附件栏
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    //设置状态栏的默认样式
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    //为Android设备的返回按钮添加点击事件
    // 第一个参数是注册的事件，第二个参数是注册事件的优先级
    $ionicPlatform.registerBackButtonAction(function(e){
      if($rootScope.backButtonPressedOnceToExit){
        ionic.Platform.exitApp();
      }
      else {
        if($location.path()=="/tab/home"||$location.path()=="/tab/category"||$location.path()=="/tab/account"){
          $rootScope.backButtonPressedOnceToExit=true;
          $cordovaToast.showShortBottom('再点一次退出！');
          setTimeout(function(){
            $rootScope.backButtonPressedOnceToExit=false;
          },2000)
        }
      }
      e.preventDefault();
      return false
    },110);
  });
});
