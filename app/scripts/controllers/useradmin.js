angular.module('ngdemoApp')
  .controller('userAdminCtrl', function ($scope,$uibModal,$document) {
    // $('#userTab a').click(function (e) {
    //   e.preventDefault();
    //   $(this).tab('show');
    // })
    //
    // var strurl = $location.url();
    // $scope.userTab={
    //     name:strurl.substr(6,strurl.length)
    // };
    // $scope.changeTabName = function (name) {
    //   $scope.userTab.name = name;
    //
    // };
    //
    // $scope.goUrl= function (url) {
    //   $state.go(url);
    //   $scope.changeTabName(url.split('.')[1]);
    // };


    // $scope.active =0;

    $scope.open = function (size, parentSelector) {
      // var parentElem = parentSelector ?
      //   angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: true,//$scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '../views/myModalContent.html',
        // controller: 'ModalInstanceCtrl',
        // controllerAs: '$scope',
        size: size,
        // appendTo: parentElem,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        console.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.ok = function () {
      // $uibModalInstance.close($ctrl.selected.item);

    };

    $scope.cancel = function () {
      // $uibModalInstance.dismiss('cancel');
      alert("a");
      $scope.dismiss({$value: 'cancel'});
    };
  });
