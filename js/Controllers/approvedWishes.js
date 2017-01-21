app.controller("approvedWishes", ["$scope", function($scope){

        $scope.title = "Approved Wishes";
        $scope.budget = 50000;

    // My filters
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchWish   = '';     // set the default search/filter term

                                  
//          //Get Wishes
//                                  
//        getApprovedWishes.success(function(data) { 
//        $scope.wishes = data; 
//            });

    $scope.wishes = [
        
        {
            name: "Fejzullah",
            toBuy: "dildo",
            price: 20,
            
        }
        
    ]
               
    
        //Setting the length of wishes & approved wishes
            $scope.totalWishes = $scope.wishes.length;

        //Adding a new wish
        $scope.makeAWish = function(userName, whatToBuy, amount) {
        
            $scope.wishes.push({
                name: userName,
                toBuy: whatToBuy,
                price: amount,
            });

        //Increasing total wishes count
            $scope.totalWishes += 1;

        }

        //Removing wish
        $scope.removeWish = function(wish) {

           $scope.totalWishes -= 1;

           var index = $scope.wishes.indexOf(wish);
                                  
           $scope.wishes.splice(index, 1);

        }



          $scope.getTotal = function() {
            var total = 0;
            for(var i = 0; i < $scope.wishes.length; i++) {
              total += Number($scope.wishes[i].price);
            }
            return total;
          }


                        // auto save
//        setInterval(function() {
//            localStorage.setItem('wishes', JSON.stringify($scope.wishes))
//            localStorage.setItem('approvedWishes', JSON.stringify($scope.approvedWishes))
//            localStorage.setItem('totalWishes', J SON.stringify($scope.totalWishes))
//            localStorage.setItem('totalApprovedWishes', JSON.stringify($scope.totalApprovedWishes))
//        }, 2000);
// //
//        $scope.wishes = JSON.parse(localStorage.getItem('wishes'));
//        $scope.approvedWishes = JSON.parse(localStorage.getItem('approvedWishes'));
//        $scope.totalWishes = JSON.parse(localStorage.getItem('totalWishes'));
//        $scope.totalApprovedWishes = JSON.parse(localStorage.getItem('totalApprovedWishes'));
//
        }]);
