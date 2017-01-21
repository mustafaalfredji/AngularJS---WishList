app.factory('getWishes', ['$http', function($http) { 
  return $http.get('WISHES DATABASE LINK') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);