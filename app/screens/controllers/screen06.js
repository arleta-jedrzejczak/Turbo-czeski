myApp.controller('screen06Controller', ['$scope', function($scope){

    $scope.points = 0;
    $scope.inputs = document.getElementsByClassName('input');
    $scope.results = ["D", "C", "E", "A", "B"];

    $scope.checkLetter = function(event) {

        var helperPoints;

        event.currentTarget.value = event.currentTarget.value.toUpperCase();
        event.currentTarget.disabled = true;

        for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].value != "") {
                helperPoints++;
            }
        }
        
        if(helperPoints == $scope.results.length) {
            $scope.disableBtn = false;
        }
        helperPoints = 0;
    }

    $scope.checkExercise = function() {
        $scope.points = 0;
        
        for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].value == $scope.results[i]) {
                console.log('Done!');
                $scope.points++;
            }
            else {
                console.log('Wrong!');
            }
        }
    }

}]);