'use strict'
angular.module 'gulpAngular'
.config ($stateProvider) ->
  $stateProvider.state "home",
    url: "/"
    templateUrl: "app/main/main.tmpl.html"
    controller: "MainCtrl"
