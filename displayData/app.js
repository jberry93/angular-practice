"use strict";

(function() {
  var displayComponent = ng.Component({
    selector: "display",
    template:
    "<p>My name is {{ myName }}</p>" +
    "<p>List of Friends:</p>" +
    "<ul>" +
      "<li *ng-for='#name of listOfNames'>" +
        "{{ name }}" +
      "</li>" +
    "</ul>" +
    "<p *ng-if='listOfNames.length > 3'>You have many friends!</p>" +
    "<p *ng-if='listOfNames.length <= 3'>Go make more friends!</p>",
  }).Class({
    constructor: function() {
      this.myName = "Jeff";
      this.listOfNames = ["Tom", "Jake", "Brittany", "Tim", "Jane", "Jen"];
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    ng.bootstrap(displayComponent);
  });
})()
