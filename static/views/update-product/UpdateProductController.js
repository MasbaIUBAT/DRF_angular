app.controller('UpdateProductController', function ($scope, $http,  $routeParams) {

   $scope.products = [];

   // Get update student
    $http({
        method   : 'get',
        url      : 'api/v1/'+$routeParams.id
    }).then( function success (response){
         $scope.id = response.data.id
         $scope.title = response.data.title
    });

	// add item function
    $scope.updateProduct = function(id){
        $http({
            method  : 'put',
            url     : 'api/v1/'+$routeParams.id+"/",
            data    : {title : $scope.title}
        }).then(function success(response){
            $scope.products.push(response.data);
            $scope.message = "Data updated!!";
        });
    }
	

});