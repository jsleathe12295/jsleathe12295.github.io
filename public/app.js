var MyWebsite = angular.module('MyWebsite', ['ngRoute']);
MyWebsite.config(function($routeProvider, $locationProvider) {
  $routeProvider
  // route for the home page
    .when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		  .when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'mainController'
		})

     $locationProvider.html5Mode(true);
    });


  MyWebsite.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome';
	});

	MyWebsite.controller('aboutController', function($scope) {
		$scope.message = '';
	});
