var app = angular.module("myApp", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});