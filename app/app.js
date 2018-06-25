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

//     console.log('hhhhhhhhhhhh');

// });

myApp.controller('appController', ['$rootScope', '$scope', '$location', '$http', '$route', function($scope, $route,$location, $http, $rootScope){

    this.$onInit = function() {
        checkPage();
    }

    this.$onChange = function() {
        checkPage();
    }

    checkPage = function() {
        // let path = $route.$$path.slice(1, 2);
        // console.log(path);
        // console.log($route.current);
    }

    $scope.starter = function(screen) {
        console.log('fire');
        let helperTitle;
        $http({
            method: 'GET',
            url: 'app/screens/screens.json'
            }).then(function successCallback(response) {
                let helperArr = response.data;
                console.log(response.data);
                helperArr.forEach(function(e){
                    if(e.id == screen) {
                        helperTitle = e.title;
                        console.log(helperTitle);
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
        localStorage.setItem(screen, points);
    }

}]);