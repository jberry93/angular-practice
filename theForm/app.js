"use strict";

var app = angular.module("myForm", []);

app.controller("myController", function($scope) {
  $scope.submitFormFunction = function() {
    if($scope.formName.$valid) {
      swal("Thank You! :]", "You filled out the form successfully!", "success");
    } else {
      swal("Failed submission :[", "Something went wrong!", "error");
    }
  };
});
