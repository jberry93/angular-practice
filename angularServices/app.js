"use strict";

var angular = require("angular");

var angularApp = angular.module("app", []);

var angularModule = angularApp.module("app");

var angularFactory = angularModule.factory("messages", function() {...});
