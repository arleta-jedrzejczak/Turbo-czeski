var myApp = angular.module('myApp', ['ngRoute']).component('layout', {templateUrl: 'app/layout/layout.html'});

myApp.config(['$routeProvider', function($routeProvider){

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

}]);

// myApp.run(function(){

// });

myApp.controller('appController', ['$scope', '$location', function($scope, $location){

    this.$onInit = function() {
        // let allPoints = [
        //     { screen: 1, points: null },
        //     { screen: 2, points: null },
        //     { screen: 3, points: null },
        //     { screen: 4, points: null },
        //     { screen: 5, points: 0 },
        //     { screen: 6, points: 0 },
        //     { screen: 7, points: 0 },
        //     { screen: 8, points: 0 },
        //     { screen: 9, points: null }
        // ]
        // localStorage.setItem("allP", allPoints);
    }

    $scope.nextScreen = function() {

    }

    $scope.prevScreen = function() {

    }

    $scope.checkTotalPoints = function(points, screen) { 
        console.log(points, screen);
    }

}]);