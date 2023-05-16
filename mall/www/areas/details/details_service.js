/**
 * 商品详情服务
 */
angular.module('details.service', [])
  .factory('DetailsFty', function($q,$window,IndexdbJs) {
      return {
       //更新购物车数据
        updateData: function (data) {
          var deferred = $q.defer();
          IndexdbJs.update("cart",data,function(){
            deferred.resolve();
          },function(e){
            deferred.reject(e);
          })
          return deferred.promise;
        },
      //获取购物车内一条数据
        get: function (id) {
          var deferred = $q.defer();
          IndexdbJs.get(id,"cart",function(data){
            deferred.resolve(data);
          },function(e){
            deferred.reject(e);
          })
          return deferred.promise;
        },
        //获取全部数据
        getAllData: function () {
          var deferred = $q.defer();
          IndexdbJs.getAll("cart",function(data){
            deferred.resolve(data);
          },function(e){
            deferred.reject(e);
          })
          return deferred.promise;
        }
      }
  });
