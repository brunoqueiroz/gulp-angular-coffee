"use strict"
angular.module("gulpAngular").controller "LoginCtrl", ($scope, Usuario) ->
  #$scope.usuario = Usuario(1, "Bruno")
  teste = {id: 2, nome:"Bruno 2"}
  $scope.usuario2 = new Usuario().build(teste)
  $scope.usuario3 = new Usuario(1,'Bianca')
  

  
