/**
 * 配置模块，控制不同平台的兼容性
  */
angular.module('config', [])
  .config(function($ionicConfigProvider){
    //在安卓平台下菜单显示在底部
    $ionicConfigProvider.platform.android.tabs.position("bottom");
  })


