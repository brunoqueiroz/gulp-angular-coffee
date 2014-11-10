'use strict'
angular.module 'gulpAngular'
.config ($stateProvider) ->
  $stateProvider
  .state 'login',
    url: '/login'
    templateUrl: 'app/login/login.tmpl.html'
    controller: 'LoginCtrl'
    
