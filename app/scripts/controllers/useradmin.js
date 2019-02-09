angular.module('ngdemoApp')
  .controller('userAdminCtrl', function ($scope,$location,$state) {
    $('#userTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    })

    var strurl = $location.url();
    $scope.userTab={
        name:strurl.substr(6,strurl.length)
    };
    $scope.changeTabName = function (name) {
      $scope.userTab.name = name;

    };

    $scope.goUrl= function (url) {
      $state.go(url);
      $scope.changeTabName(url.split('.')[1]);
    };

  });
