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
			templateUrl : 'pages/me.html',
			controller  : 'aboutController'
		})

     $locationProvider.html5Mode(true);
    });


  MyWebsite.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome';
		const panels = document.querySelectorAll('.panel');

	    function toggleOpen() {
	      console.log('Hello');
	      this.classList.toggle('open');
	    }

	    function toggleActive(e) {
	      console.log(e.propertyName);
	      if (e.propertyName.includes('flex')) {
	        this.classList.toggle('open-active');
	      }
	    }

	    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
	    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

	});

	MyWebsite.controller('aboutController', function($scope) {
		$scope.message = 'Resume';


		});
