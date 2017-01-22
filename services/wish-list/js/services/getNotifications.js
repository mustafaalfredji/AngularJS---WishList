app.factory('getNotifications', ['$http', function($http) { 
  return $http.get('notifications') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);