myApp.controller('screen06Controller', ['$scope', function($scope){

    let currentScreen = 6;

    let points = 0;
    const inputs = document.getElementsByClassName('input');
    const results = ["D", "C", "E", "A", "B"];
    $scope.disableBtn = true;

    $scope.countLetters = function(event) {

        if(event.currentTarget.value.length >= 1) {
            event.currentTarget.value = event.currentTarget.value.slice(0, -1);
        }
        
    }

    $scope.checkLetter = function(event) {

        var helperPoints = 0;

        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value != "") {
                helperPoints++;
            }
        }
        
        if(helperPoints == results.length) {
            $scope.disableBtn = false;
        }
        helperPoints = 0;
    }

    $scope.checkExercise = function() {
        points = 0;
        
        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value.toUpperCase() == results[i]) {
                console.log('Done!');
                points++;
            }
            else {
                console.log('Wrong!');
            }
        }
        $scope.checkTotalPoints(points, currentScreen);
    }

}]);