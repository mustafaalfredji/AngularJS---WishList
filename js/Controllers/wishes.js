app.controller("wishes", ["$scope", function($scope){

        $scope.title = "WishList";
        $scope.budget = 50000;

    // My filters
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchWish   = '';     // set the default search/filter term

        

//          //Get Wishes                        
//        getWishes.success(function(data) { 
//        $scope.wishes = data; 
//            });
        

                          
        $scope.wishes = [
        
        {
            name: "Mustafa",
            toBuy: "Tesla",
            price: 500,
            
        }
        
    ]
                          
        
        //Setting the length of wishes & approved wishes
            $scope.totalWishes = $scope.wishes.length;

        //Adding a new wish
        $scope.makeAWish = function(userName, whatToBuy, amount) {

        //Pushing my object for wish to the array of wishes
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

        //Decreasing the totalwishes
        $scope.totalWishes -= 1;

        //Identifying the index of which to remove
        var index = $scope.wishes.indexOf(wish)

        //Removing my wish from the table
        $scope.wishes.splice(index, 1);

        }


            $scope.approve = function(wish) {

               var index = $scope.wishes.indexOf(wish)

                $scope.budget -= $scope.wishes[index].price;

//                $scope.approvedWishes.wishes.push(
//
//        {
//                name: $scope.wishes[index].name,
//                toBuy: $scope.wishes[index].toBuy,
//                price: $scope.wishes[index].price,
//
//        });

//                $scope.ApprovedWishes.totalWishes += 1;
               
                $scope.totalWishes -= 1;
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
