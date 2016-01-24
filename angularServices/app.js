"use strict";

var angularModule = angular.module("app", []);

// create a service to store & create messages:
angularModule.factory("messages", function() {
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

// create a controller to render messages in the view:
angularModule.controller("ListController", function(messages) {
  this.messages = messages.list;
});

// create a controller to post messages:
angularModule.controller("PostController", function(messages) {
  this.newMessage = "Hello World!!";
  this.addMessage = function(message) {
    messages.add(message);
    this.newMessage = "";
  };
});
