# Topics to cover:
- npm packages
  - [angular2](https://www.npmjs.com/package/angular2)
  - [live-server](https://www.npmjs.com/package/live-server)
- `package.json`
- `app.js`
  - `ng`
  - `.Component()`
  - `.Class()`
  - `.addEventListener()`
  - IIFE (Immediately Invoked Function Execution)
- `index.html`

### npm Packages
[angular2](https://www.npmjs.com/package/angular2) - A package containing all the code needed to run an Angular 2 app

[live-server](https://www.npmjs.com/package/live-server) - A development server that refreshes on the event that a change is made

### `package.json`
Here is the code from `package.json`:

```JSON
{
  "name": "angular2intro",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "live-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-alpha.44"
  },
  "devDependencies": {
    "live-server": "^0.8.2"
  }
}
```
There are two important pieces to the Angular 2 puzzle here:
- We have our dependencies laid out for [angular2](https://www.npmjs.com/package/angular2) and [live-server](https://www.npmjs.com/package/live-server)
- Under the object `"scripts"` we assign the property `"start"` to `"live-server"` so that we can start the development server with `npm start`

### `app.js`
Here is the code from `app.js`:
```JavaScript
(function() {

  var AppComponent = ng.Component({
    selector: "my-app",
    template: "<h1>An Angular 2 App</h1><h5>Angular 2 is Awesome!</h5>"
  }).Class({
    constructor: function() { }
  });

  document.addEventListener("DOMContentLoaded", function() {
    ng.bootstrap(AppComponent);
  });

})();
```
`ng` - An Angular 2 object containing a variety of methods like `.Component()` and `.Class()`

`.Component()` - A method of object `ng` that takes in one argument which is an object containing two properties. Here's an example:
```JavaScript
ng.Component({
  selector: "html-tag",
  template: "<p>Some HTML code here</p>"
});
```
  - `selector` - The HTML tag you will use in `index.html` to place the value of `template` in
  - `template` - The HTML code that will be placed in the tag specified by `selector`

`.Class()` - A method of object `ng` that takes in one argument which is an object containing one property. Here's an example:
```JavaScript
ng.Class({
  constructor: function() {}
});
```
`.addEventListener()` - A method of the `document` object that takes in 3 arguments:
- `event` - An event to wait for
- `function` - A function to run when the `event` occurs
- `useCapture` (optional) - A boolean value indicating which phase the event is captured:
  - `true` = Capturing phase
  - `false` (default) = Bubbling phase
  - [Awesome explanation on capturing phase vs bubbling phase](http://javascript.info/tutorial/bubbling-and-capturing)

IIFE - Stands for "Immediately Invoked Function Execution" and it executes a function as soon as it is created. A good reason to use IIFE is to stop polluting the global namespace. Here is an example:
```JavaScript
(function() {
  // JavaScript code
})()
```
- **What does it mean to pollute the global namespace?**
  - Adding variables to the global scope will leave room for errors later on
  - JavaScript uses something called **garbage collecting** so that you do not have to worry about memory management. Placing variables in an IIFE will mark it for garbage collecting
  - [StackOverflow question/answer on IIFE](http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript)
  - [StackOverflow question/answer on global namespace pollution](http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted)
  - [StackOverflow question/answer on garbage collecting](http://stackoverflow.com/questions/864516/what-is-javascript-garbage-collection)

### `index.html`
Here is the code for `index.html`:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Angular 2 App</title>
    <meta charset="utf-8">
    <script src="node_modules/angular2/bundles/angular2.sfx.dev.js"></script>
    <script src="app.js"></script>
  </head>
  <body>
    <my-app></my-app>
  </body>
</html>
```
Everything here should be self-explanatory if you read everything above
