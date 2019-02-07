'use strict';

/**
 * @ngdoc overview
 * @name ngdemoApp
 * @description
 * # ngdemoApp
 *
 * Main module of the application.
 */
angular
  .module('ngdemoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMdIcons',
    'ui.router'

  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    //默认路由
    $urlRouterProvider.otherwise('/main');
    //定义路由规则
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '../views/main.html',
      })
      .state('user', {
        url: '/user',
        templateUrl: '../views/user.html',
        controller: 'userAdminCtrl'
      })
      .state('user.useradmin', {
        url: '/useradmin',
        templateUrl: '../views/user_admin.html',
      })
      .state('user.usersearch', {
        url: '/usersearch',
        templateUrl: '../views/user_search.html',
      })
      .state('user.useradd', {
        url: '/useradd',
        templateUrl: '../views/user_add.html',
      });

  });
