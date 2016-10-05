angular.module('MyWebsite',[]).
    config(function($routeProvider){
        $routeProvider.
          when('/about',{template:'views/about.html'}).
          otherwise({redirectTo:'/home', template:'views/home.html'});
    });


function MainCtrl($scope){

}
