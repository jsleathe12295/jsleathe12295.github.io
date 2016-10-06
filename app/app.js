var MyWebsite = angular.module('MyWebsite', ['ngRoute'])
.config(['routeProvider', function($routeProvider)]) {
        $routeProvider
            // route for the home page/signin page
          routeProvider.when('/home', {templateUrl:'pages/home.html' });
          routeProvider.when('/about', {templateUrl:'pages/about.html' });
          routeProvider.otherwise({redirectTo: '/home'} });


            });
