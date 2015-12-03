"use strict";

(function() {
  var displayComponent = ng.Component({
    selector: "display",
    template: "<p>My name is {{ name }}</p>" +
  }).Class({
    constructor: function() {
      this.name = "Jeff";
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    ng.bootstrap(displayComponent);
  });
})()
