"use strict"
describe "controllers", ->
  scope = undefined
  beforeEach module("gulpAngular")
  beforeEach inject(($rootScope) ->
    scope = $rootScope.$new()
    return
  )
  it "should define more than 5 awesome things", inject(($controller) ->
    expect(scope.awesomeThings).toBeUndefined()
    $controller "MainCtrl",
      $scope: scope

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy()
    expect(scope.awesomeThings.length > 6).toBeTruthy()
    return
  )
  return
 