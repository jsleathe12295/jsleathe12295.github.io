

angular.module('MyWebsite',['ngRoute'])
.config(function($routeProvider) {
        $routeProvider
            // route for the home page/signin page
            .when('/', {
                template : require('./views/home.html'),
                controller  : 'HomeController as HC',
              
            });


function MainCtrl($scope){

}
