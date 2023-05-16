/*
* 通用功能
*/
angular.module('commonJs', [])
  .factory('CommonJs', ['$ionicPopup',function ($ionicPopup) {
    return {
      // 弹出提示框
      AlertPopup:function(message){
        var alertPopup = $ionicPopup.alert({
          title: '提示',
          template: message
        });
      }
    }
  }]);
