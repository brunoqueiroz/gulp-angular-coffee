"use strict"
angular.module("gulpAngular").controller "LoginCtrl", ($scope, Usuario) ->
  $scope.usuario = new Usuario(1, "Bruno")
  console.log $scope.usuario
  
