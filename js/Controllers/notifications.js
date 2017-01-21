app.controller("notifications", ["$scope", function($scope) {

    $scope.title = "Notifications"
    
    $scope.notifications = [
        
        {
        name: "Mustafa",
        toBuy: "tesla", 
        price: 500,
        }
    ]
    
    $scope.totalNotifications = $scope.notifications.length

                                  
//    getNotifications.success(function(data) { 
//        $scope.notifications = data; 
//            });
    

    
    
    

}])
