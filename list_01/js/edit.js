var edit = angular.module("edit", []);

edit.controller("edit", function ($scope, data, $stateParams) {
  let id = $stateParams.userId;
  $scope.expression = true;
  let aa = 0;
  for (let a = 0; a < data.length; a++) {
    if (data[a].id === id) {
      aa = a;
      $scope.data1 = data[a];
    }
  }

  $scope.clickUpdate = function () {
    if (!$scope.data1.name) {
      alert("你输入的名称有空");
    } else if (!$scope.data1.description) {
      alert("你输入的描述有空");
    } else if (!$scope.data1.category) {
      alert("你输入的类别有空");
    } else {
      data[aa] = {
        id: $scope.data1.id,
        name: $scope.data1.name,
        description: $scope.data1.description,
        category: $scope.data1.category,
      };
      window.location.href = window.location.href.replace("/edit", "/");
    }
  };
});
