app.controller("approvedWishes", ["$scope", function($scope) {

          $scope.title = "approvedWishes";


          // My filters
              $scope.sortType     = 'name'; // set the default sort type
              $scope.sortReverse  = false;  // set the default sort order
              $scope.searchWish   = '';     // set the default search/filter term


          //My Approved Wishes
              $scope.approvedWishes = [{
                  name: "Mustafa",
                  toBuy: "Tesla",
                  price: 2000,
              },];


              $scope.totalApprovedWishes = $scope.approvedWishes.length;


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

              $scope.getTotal = function() {
                var total = 0;
                for(var i = 0; i < $scope.approvedWishes.length; i++) {
                  total += Number($scope.approvedWishes[i].price);
                }
                return total;
              }


}])
