'use strict'
angular.module 'gulpAngular'
.config ($stateProvider) ->
  $stateProvider
  .state 'login',
    url: '/login'
    templateUrl: 'app/account/login/login.tmpl.html'
    controller: 'LoginCtrl'
