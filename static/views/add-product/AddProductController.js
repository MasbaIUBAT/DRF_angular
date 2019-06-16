app.controller('AddProductController', function ($scope, $http) {

   $scope.products = [];

	// add item function
	$scope.addProduct = function(){
		 $http({
            method: 'post',
            url: 'api/v1/',
            data: {title: $scope.title},
        }).then(function success(response) {
            $scope.products.push(response.data);
            $scope.message = "Data has been save";
        });
	}; 

});