myApp.controller('screen01Controller', ['$scope', '$http',function($scope, $http){

    let currentScreen = 9;
    $scope.pointsAll;
    let tempAllPoints = 0;
    let tempPoints = 0;

    this.$onInit = function() {

        $http({
            method: 'GET',
            url: 'app/screens/screens.json'
            }).then(function successCallback(response) {
                console.log(typeof(tempAllPoints));
                let helperArr = response.data;
                helperArr.forEach(function(e){
                let num = 0;
                    if(e.exercise) {
                        tempPoints = localStorage.getItem(e.id);
                        num = parseFloat(tempPoints);
                        if(tempPoints == null) {
                            tempPoints = 0;
                            // console.log(typeof(tempPoints));
                            num = parseFloat(tempPoints);
                        }
                        
                        console.log(num);
                        console.log(typeof(num));
                        tempAllPoints += num;
                        console.log(typeof(tempAllPoints));
                        console.log(tempAllPoints);
                        $scope.pointsAll = tempAllPoints;
                    }
                })
            }, function errorCallback(response) {
                //
            });
            
    }

}]);