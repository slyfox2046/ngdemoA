angular.module('ngdemoApp')
    .directive("navToolbar", function () {
        return {
            restrict: 'E',
            templateUrl: 'directive/nav-toolbar/nav-toolbar.html',
        };
    })
    .controller("navCtrl", function ($scope,$location,$mdDialog, leaveService, cookieService, userService, dialogService) {
        $scope.user = cookieService.getCookie('user');
        $scope.undealLeave = 0;

        //获取未审批的请假条数目
        $scope.getUndealLeave = function() {
            leaveService.getLeaveList($scope.user.role, '',  2, 1, 1000, '', '')
                .then(function(resp) {
                    if(resp.data.ret == 0) {
                        $scope.undealLeave = resp.data.params.list.length;
                    }
                })
        }


        //用户未登录隐藏菜单
        if($scope.user) {
            $scope.user = cookieService.getCookie('user');
            $scope.userName = $scope.user.loginname;
            $scope.userRole = $scope.user.role;

            //管理员定时查询未处理的请假信息
          $scope.getUndealLeave();
          var timer = setInterval(function(){
              $scope.getUndealLeave();
          }, 60000);
        }

        //退出登录
        $scope.logout = function () {
            var confirm =  $mdDialog.confirm()
              .title('退出登录')
              .textContent('确定退出登录?')
              .ok('确认')
              .cancel('取消');
            $mdDialog.show(confirm).then(function() {
                // window.localStorage.removeItem("user");
                userService.logout().then(function (resp) {
                    if(resp.data.ret == 0) {
                        cookieService.clearCookie("user");
                        $location.path('/login');
                        window.location.reload();
                    } else {
                        dialogService.alert("提示",  resp.data.err );
                    }
                });

            })
        }


    })
