myApp.controller('screen09Controller', ['$scope', '$http',function($scope, $http){

    let currentScreen = 9;
    $scope.pointsAll;
    let tempAllPoints = 0;
    let tempPoints = 0;

    this.$onInit = function() {

        $http({
            method: 'GET',
            url: 'app/screens/screens.json'
            }).then(function successCallback(response) {
                let helperArr = response.data;
                helperArr.forEach(function(e){
                let num = 0;
                    if(e.exercise) {
                        tempPoints = sessionStorage.getItem(e.id);
                        num = parseFloat(tempPoints);
                        if(tempPoints == null) {
                            tempPoints = 0;
                            num = parseFloat(tempPoints);
                        }
                        tempAllPoints += num;
                        $scope.pointsAll = tempAllPoints;
                    }
                })
            }, function errorCallback(response) {
                //
            });
            
    }

}]);