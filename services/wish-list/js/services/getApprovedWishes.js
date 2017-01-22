app.factory('getApprovedWishes', ['$http', function($http) { 
  return $http.get('APROVED WISHES DATABASE LINK') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);