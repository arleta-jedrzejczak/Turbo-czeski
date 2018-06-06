myApp.controller('screen06Controller', ['$scope', function($scope){

    $scope.points = 0;
    $scope.inputs = document.getElementsByClassName('input');
    $scope.results = ["D", "C", "E", "A", "B"];
    $scope.disableBtn = true;

    $scope.countLetters = function(event) {

        if(event.currentTarget.value.length >= 1) {
            event.currentTarget.value = event.currentTarget.value.slice(0, -1);
        }
        
    }

    $scope.checkLetter = function(event) {

        var helperPoints = 0;

        for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].value != "") {
                helperPoints++;
            }
        }
        console.log(helperPoints);
        
        if(helperPoints == $scope.results.length) {
            $scope.disableBtn = false;
        }
        helperPoints = 0;
    }

    $scope.checkExercise = function() {
        $scope.points = 0;
        
        for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].value.toUpperCase() == $scope.results[i]) {
                console.log('Done!');
                $scope.points++;
            }
            else {
                console.log('Wrong!');
            }
        }
    }

}]);