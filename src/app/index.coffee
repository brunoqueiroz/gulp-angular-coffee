"use strict"
angular.module("gulpAngular", [
  "ngAnimate"
  "ngCookies"
  "ngTouch"
  "ngSanitize"
  "restangular"
  "ui.router"
]).config ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.otherwise "/"
  return
