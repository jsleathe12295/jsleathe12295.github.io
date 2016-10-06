var MyWebsite = angular.module('MyWebsite', ['ngRoute']);
MyWebsite.config(function($routeProvider) {
        $routeProvider
            // route for the home page/signin page
            .when('/', {
    				templateUrl : 'pages/home.html',
    				controller  : 'mainController'
    			})

    			// route for the about page
    			.when('/about', {
    				templateUrl : 'pages/about.html',
    				controller  : 'aboutController'
    			})
    });


    MyWebsite.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Under Maintainence';
	});

	MyWebsite.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
