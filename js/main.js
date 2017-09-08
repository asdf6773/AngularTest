var app = angular.module("myApp", ['ngRoute']); //route
app.config(function($routeProvider) {
  $routeProvider
    .when('/view1', {
      controller: 'SimpleController',
      templateUrl: 'view1.html'
    })
    .when('/view2', {
      controller: 'SimpleController',
      templateUrl: 'view2.html'
    })
    .otherwise({
      redirectTo: '/view1'
    })
})
