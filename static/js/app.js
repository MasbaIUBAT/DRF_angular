var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
      .when('/',{
          url: '/',
          templateUrl: 'static/views/product/product.html',
          controller: 'ProductController',
      })
      .when('/add-product',{
          url: '/add-product',
          templateUrl: 'static/views/add-product/add-product.html',
          controller: 'AddProductController',
      })
      .when('/update-product/:id',{
          url: '/update-product:id',
          templateUrl: 'static/views/update-product/update-product.html',
          controller: 'UpdateProductController',
      })
});