"use strict";

var angular = require("angular");

var examApp = angular.module("examApp", []);

examApp.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/questions", {
        templateUrl: "partials/questionList.html",
        controller: "QuestionListController"
      })
      .when("/questions/:questionID", {
        templateUrl: "partials/answers.html",
        controller: "AnswersController"
      })
      .otherwise({ redirectTo: "/questions" });
  }
]);
