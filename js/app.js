var app = angular.module("myApp", ["xeditable", "ngRoute"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'wishes',
      templateUrl: 'views/wishes.html'
    })
  	.when("/approvedWishes", {
      controller: "approvedWishes",
    	templateUrl: "views/approvedWishes.html"
          })
    .otherwise({
      redirectTo: '/'
    });
});
