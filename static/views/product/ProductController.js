app.controller('ProductController', function ($scope, $http) {

$scope.itemList = [];
// product render template
$http.get('api/v1/').then(function (response) {
        $scope.itemList = [];
        var item_data = Object.values(response.data);
        for (var list of item_data) {
            $scope.itemList.push(list);
        }
});


// This funciton use `delete`
$scope.deleteProduct = function(id){
        $http({
          method : 'delete',
          url    : 'api/v1/'+id+"/",
        }).then(function success(response){
            $scope.itemList.splice(response.id, 1);
            $scope.succeesDeleteMesage = "Data Delete successfully";
        });
    };

});