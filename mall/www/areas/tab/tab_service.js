/**
 * 导航标签服务
 */
angular.module('tab.service', [])
  .factory('tabFty', function($q,IndexdbJs) {
      return {
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
