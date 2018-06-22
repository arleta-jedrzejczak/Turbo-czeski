myApp.controller('screen01Controller', ['$scope', function($scope){

    let currentScreen = 1;

    this.$onInit = function() {
        $scopeTitle = $scope.starter(currentScreen);
    }
    
}]);