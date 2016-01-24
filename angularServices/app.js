"use strict";

var angular = require("angular");

var angularApp = angular.module("app", []);

var angularModule = angularApp.module("app");

var angularFactory = angularModule.factory("messages", function() {
  // store service dependencies
  var messages = {};
  
  // store messages
  messages.list = [];

  // add messages to list
  messages.add = function(message) {
    messages.list.push({
      id: messages.list.length,
      text: message
    });
  };

  // send object containing messages
  return messages;
});
