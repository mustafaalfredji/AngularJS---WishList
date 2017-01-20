app.controller("MainController", ["$scope", function($scope){
    
        $scope.title = "WishList";
        $scope.budget = 50000;    
    
    // My filters
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchWish   = '';     // set the default search/filter term
    
    
    //My Wishes
        $scope.wishes = [
            
            { 
                name: "Fejzullah",
                toBuy: "dildo",
                price: 20,
            },
            
        ];
            
    //My Approved Wishes
        $scope.approvedWishes = [{ 
            name: "Mustafa",
            toBuy: "Tesla",
            price: 2000,
        },];
    
    //Setting the length of wishes & approved wishes
            $scope.totalWishes = $scope.wishes.length;
            $scope.totalApprovedWishes = $scope.approvedWishes.length;
    
    
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
        $scope.removeApprovedWish = function(wish) { 
            
            var index = $scope.approvedWishes.indexOf(wish)  
   
            $scope.budget += Number($scope.approvedWishes[index].price);

            console.log("Saved " + $scope.approvedWishes[index].price); 
 
                $scope.wishes.push(        
        {
                name: $scope.approvedWishes[index].name,
                toBuy: $scope.approvedWishes[index].toBuy,
                price: $scope.approvedWishes[index].price,
        });
            
        $scope.totalWishes += 1;
        $scope.totalApprovedWishes -= 1;
        $scope.approvedWishes.splice(index, 1);
            
        }
        
                
            $scope.approve = function(wish) {
                
               var index = $scope.wishes.indexOf(wish)
                
                $scope.budget -= $scope.wishes[index].price; 
                
                $scope.approvedWishes.push(
                    
        {
                name: $scope.wishes[index].name,
                toBuy: $scope.wishes[index].toBuy,
                price: $scope.wishes[index].price,
            
        });
                $scope.totalWishes -= 1;
                $scope.totalApprovedWishes += 1;
                $scope.wishes.splice(index, 1);
                
                
            }
            
            
                        // auto save
//        setInterval(function() {
//            localStorage.setItem('wishes', JSON.stringify($scope.wishes));
//            localStorage.setItem('approvedWishes', JSON.stringify($scope.approvedWishes));
//            localStorage.setItem('totalWishes', JSON.stringify($scope.totalWishes));
//            localStorage.setItem('totalApprovedWishes', JSON.stringify($scope.totalApprovedWishes));
//        }, 2000);
//                    
//        $scope.wishes = JSON.parse(localStorage.getItem('wishes'));
//        $scope.approvedWishes = JSON.parse(localStorage.getItem('approvedWishes'));
//        $scope.totalWishes = JSON.parse(localStorage.getItem('totalWishes'));
//        $scope.totalApprovedWishes = JSON.parse(localStorage.getItem('totalApprovedWishes'));
   
        }]);