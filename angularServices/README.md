# Angular Service

Let's walk through the code in this [article][1]

First off:
- What is a service in Angular?
  - [According to the article][1], "A service provides an easy way for us to share data and functionality throughout an app"
  - [According to the Angular documentation][2], the factory method will instantiate a *service factory* which takes in 2 arguments:
    - 1) Name of the service
    - 2) Function containing the logic of the service

---

## [`app.js`][3]

Here is the `app.js` minus the comments and spacing:

```JavaScript
"use strict";
var angularModule = angular.module("app", []);
angularModule.factory("messages", function() {
  var messages = {};
  messages.list = [];
  messages.add = function(message) {
    messages.list.push({
      id: messages.list.length,
      text: message
    });
  };
  return messages;
});
angularModule.controller("ListController", function(messages) {
  this.messages = messages.list;
});
angularModule.controller("PostController", function(messages) {
  this.newMessage = "Hello World!!";
  this.addMessage = function(message) {
    messages.add(message);
    this.newMessage = "";
  };
});
```

Let's take this a few lines at a time

---

```JavaScript
var angularModule = angular.module("app", []);
angularModule.factory("messages", function() {/* Service Logic */});
angularModule.controller("ListController", function() {/* List Controller Logic */});
angularModule.controller("PostController", function() {/* Post Controller Logic */});
```

A couple things are happening here:
- Line 1 = We are invoking a method `module()` from object `angular` which takes in 2 arguments; first a string `"app"` containing the name of the module and second, an array containing the dependencies of `"app"`. This method returns a new module containing all the methods and properties of the Angular module. This new module is set equal to a new variable called `angularModule`. ([cite][4])
  - Since `"app"` does not have any dependencies, we simply give an empty array to instantiate the module


[1]: https://thinkster.io/a-better-way-to-learn-angularjs/services "Thinkster Angular Article"

[2]: https://docs.angularjs.org/api/auto/service/$provide#factory "Angular Documentation: factory()"

[3]: https://github.com/jberry93/angular-practice/blob/master/angularServices/app.js "app.js Content"

[4]: https://docs.angularjs.org/api/ng/function/angular.module "Angular Documentation: Modules"
