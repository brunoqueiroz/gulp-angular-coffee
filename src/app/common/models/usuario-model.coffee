angular.module("gulpAngular").factory "Usuario", ->
  class Usuario
    constructor: (@id, @nome) ->
    build: (usuario) ->
      angular.extend(@, usuario)

