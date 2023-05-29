/**
 * 购物车页面服务
 */
angular.module('cart.service', [])
  .factory('CartFty', ['$q','$window','IndexdbJs', function ($q,$window,IndexdbJs) {
    return {
      //获取全部数据
      getAllData: function () {
        var deferred = $q.defer();
        IndexdbJs.getAll("cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      //获取某一条商品数据
      get: function (id) {
        var deferred = $q.defer();
        IndexdbJs.get(id,"cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      //更新数据
      updateData: function (data) {
        var deferred = $q.defer();
        IndexdbJs.update("cart",data,function(){
          deferred.resolve();
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      //删除某一条商品数据
      delete: function (id) {
        var deferred = $q.defer();
        IndexdbJs.delete(id,"cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      }
    }
  }]);
