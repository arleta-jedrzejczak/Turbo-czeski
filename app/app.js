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
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      }).hashPrefix('');

}]);

// myApp.run(function(){

//     console.log('hhhhhhhhhhhh');

// });

myApp.controller('appController', ['$rootScope', '$scope', '$location', '$http', '$route', function($scope, $route, $location, $http, $rootScope){

    checkPage = function() {
        // let path = $route.$$path.slice(1, 2);
        // console.log(path);
        // console.log($route.current);
    }

    $scope.starter = function(screen) {
        let helperTitle;
        $http({
            method: 'GET',
            url: 'app/screens/screens.json'
            }).then(function successCallback(response) {
                let helperArr = response.data;
                helperArr.forEach(function(e){
                    if(e.id == screen) {
                        helperTitle = e.title;

                        return helperTitle;
                    }
                })
            }, function errorCallback(response) {
                //
            });
    }

    $scope.updateScreen = function(name, data) {

    }

    $scope.nextScreen = function() {

    }

    $scope.prevScreen = function() {

    }

    $scope.checkTotalPoints = function(points, screen) { 
        sessionStorage.setItem(screen, points);
    }

}]);