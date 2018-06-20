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

    $scope.checkTotalPoints = function(points, screen) {

        $scope.totalPoints = 0;
        $scope.allScreens = 9;
        $scope.countedScreens = [];

        for(var i = 0; i < $scope.allScreens; i++) {
            console.log("Fiz");
            if($scope.countedScreens[i] != screen) {
                console.log("Buz");
                if(points) {
                    console.log("FizBuz");
                    $scope.countedScreens.push(screen);
                    $scope.totalPoints += points;
                }
            }
        }
        console.log($scope.countedScreens, $scope.totalPoints);
    }

}]);