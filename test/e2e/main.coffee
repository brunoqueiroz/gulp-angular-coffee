"use strict"
describe "The main view", ->
  beforeEach ->
    browser.get "http://localhost:3000/index.html"
    return

  it "list more than 5 awesome things", ->
    element.all(By.repeater("awesomeThing in awesomeThings")).count().then (count) ->
      expect(count > 5).toBeTruthy()
      return

    return

  return
