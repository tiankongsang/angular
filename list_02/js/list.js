var list = angular.module("list", ["ui.router", "add", "edit"]);

list.config(function ($stateProvider) {
  $stateProvider
    .state("/", {
      url: "/",
      templateUrl: "list.html",
      controller: "list",
    })
    .state("add", {
      url: "/add",

      templateUrl: "add.html",
      controller: "add",
    })
    .state("edit", {
      url: "/edit",
      params: { userId: null, ShowHidden: true },
      templateUrl: "edit.html",
      controller: "edit",
    });
});

list.service("data", function () {
  let data = [
    {
      id: "T001",
      name: "iPod",
      description: "iOS",
      category: "📱mobile",
    },
    {
      id: "T002",
      name: "iPhone",
      description: "iOS",
      category: "📱mobile",
    },
    {
      id: "T003",
      name: "iPad",
      description: "iOS",
      category: "📟tablet",
    },
    {
      id: "T004",
      name: "iMac",
      description: "OS X",
      category: "🖥️desktop",
    },
    {
      id: "T005",
      name: "MacBook",
      description: "OS X",
      category: "💻laptop"
    },
  ];
  return data;
});
list.controller("list", function ($scope, $state, data) {
  $scope.data = data;
  $scope.clickAdd = function () {
    $state.go("add");
  };
  $scope.modifyData = function (id) {
    $state.go("edit", { userId: id, ShowHidden: false });
  };
  $scope.del = function (id) {
    for (var i = 0; i < $scope.data.length; i++) {
      if ($scope.data[i].id == id) {
        $scope.data.splice(i, 1);
        break;
      }
    }
    $scope.data.splice(index, 1);
  };
});
