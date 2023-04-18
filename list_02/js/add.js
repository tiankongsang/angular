var add = angular.module("add", []);
add.controller("add", function ($scope, data) {
  $scope.clickAdd = function () {
    if (!($scope.data1.id && $scope.data1.name && $scope.data1.description && $scope.data1.category)) {
      alert("你的输入有空");
      $scope.data1 = {};
    } else {
      let aa = true;
      for (let a = 0; a < data.length; a++) {
        if (data[a].id === $scope.data1.id) {
          alert("代码已存在请重新输入");
          aa = false;
          $scope.data1.id = "";
          break;
        }
      }
      if (aa) {
        data.push({
          id: $scope.data1.id,
          name: $scope.data1.name,
          description: $scope.data1.description,
          category: $scope.data1.category,
        });
        window.location.href = window.location.href.replace("/add", "/");
      }
    }
  };
});
