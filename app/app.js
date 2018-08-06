var myApp = angular.module('myApp', ['ngRoute']).component('layout', {templateUrl: 'app/layout/layout.html'});

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider
        .when('/1', {
            templateUrl: 'app/screens/templates/screen01.html'
        })
        .when('/2', {
            templateUrl: 'app/screens/templates/screen02.html'
        })
        .when('/3', {
            templateUrl: 'app/screens/templates/screen03.html'
        })
        .when('/4', {
            templateUrl: 'app/screens/templates/screen04.html'
        })
        .when('/5', {
            templateUrl: 'app/screens/templates/screen05.html'
        })
        .when('/6', {
            templateUrl: 'app/screens/templates/screen06.html'
        })
        .when('/7', {
            templateUrl: 'app/screens/templates/screen07.html'
        })
        .when('/8', {
            templateUrl: 'app/screens/templates/screen08.html'
        })
        .when('/9', {
            templateUrl: 'app/screens/templates/screen09.html'
        })
        .otherwise({
            redirectTo: '/1'
        })
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    //   }).hashPrefix('');

}]);

myApp.controller('appController', ['$rootScope', '$scope', '$location', '$http', '$route', function($scope, $route, $location, $http, $rootScope){

    $scope.checkTotalPoints = function(points, screen) { 
        sessionStorage.setItem(screen, points);
        $scope.updatePoints(screen, points);
        let chevron = document.getElementsByClassName('fire');
        TweenMax.fromTo(chevron, 1, { scale: 2, color: '#f00' }, { scale: 1, ease:Power4.easeInOut, color: '#fff' });
    }

    $scope.accentChevron = function() {
        let chevron = document.getElementsByClassName('fire');
        TweenMax.fromTo(chevron, 1, { scale: 2, color: '#f00' }, { scale: 1, ease:Power4.easeInOut, color: '#fff' });
    }

    $scope.updatePoints = function(screen, points) {
        let pointer = document.getElementById(screen)
        pointer.innerText = points;
    }

}]);