angular.module('MyWebsite')
.config(function($routeProvider) {
        $routeProvider
            // route for the home page/signin page
            .when('/', {
                template : require('./pages/home.html'),
                controller  : 'HomeController as HC',

            });


function MainCtrl($scope){

}
