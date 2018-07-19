myApp.controller('screen07Controller', ['$scope', function($scope){

    let currentScreen = 8;

    $scope.sentences = [
        {question: "Mluvíš český?", answear: "Mluvím anglicky.", name: "q1", result: "false"},
        {question: "Jak se jmenuješ?", answear: "Jmenuji se Anna.", name: "q2", result: "true"},
        {question: "Odkud jsi?", answear: "Omlouvám se.", name: "q3", result: "false"}
    ]
    let helperArray = [];
    const checkingPoints = document.getElementsByClassName('checkingPoints');
    $scope.points = 0;
    $scope.disableBtn = true;
    let helperFinalArray = [];

    $scope.checkSubmit = function() {
        
        let helperPoints = 0;
        
        for(var i = 0; i < checkingPoints.length; i++) {
            if(checkingPoints[i].checked == true) {
                helperArray.push(checkingPoints[i]);
                helperPoints++;
            }
        }

        if(helperPoints == $scope.sentences.length) {
            $scope.disableBtn = false;
        }

    }

    $scope.checkExercise = function() {
        
        $scope.points = 0;
        helperFinalArray = [];

        for(var i = 0; i < checkingPoints.length; i++) {
            if(checkingPoints[i].checked == true) {
                helperFinalArray.push(checkingPoints[i]);
            }
        }

        for(var i = 0; i < helperFinalArray.length; i++) {
            if(helperFinalArray[i].value == $scope.sentences[i].result) {
                $scope.points++;
            }
            else {

            }
        }
        $scope.checkTotalPoints($scope.points, currentScreen);
    }

}]);