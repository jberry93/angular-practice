"use strict";

(function() {
  
  var AppComponent = ng.Component({
    selector: "my-app",
    template: "<h1>An Angular 2 App</h1>"
  }).Class({
    constructor: function() { }
  });

  document.addEventListener("DOMContentLoaded", function() {
    ng.bootstrap(AppComponent);
  });

})();
