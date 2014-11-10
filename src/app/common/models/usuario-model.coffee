app.factory "Usuario", ->
  class Usuario
    constructor: (@id, @nome) ->

    setData: (usuario) ->
      angular.extend(@, usuario)


