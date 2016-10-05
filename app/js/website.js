

angular.module('MyWebsite',['ngRoute'])
.config(function($routeProvider) {
        $routeProvider
            // route for the home page/signin page
            .when('/', {
                template : require('./pages/signin.html'),
                controller  : 'AuthController as AU',
                css : 'styles.css'
            })





    config(function('$routeProvider'){
        $routeProvider.
          when('/about',{templateUrl:'views/about.html'}).
          otherwise({redirectTo:'/home', template:'views/home.html'});
    });


function MainCtrl($scope){

}
