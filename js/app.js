var app = angular.module("myApp", ["ngRoute", "xeditable"]);



app.config(function($routeProvider) {
  $routeProvider
    			// route for the home page
			.when('/', {
				templateUrl : 'views/wishes.html',
				controller  : 'wishes'
			})

			// route for the about page
			.when('/approvedWishes', {
				templateUrl : 'views/approvedWishes.html',
				controller  : 'approvedWishes',
			})
  			.when('/notifications', {
				templateUrl : 'views/notifications.html',
				controller  : 'notifications',
			})
  
              .otherwise({redirectTo: '/'});

            
	});

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});