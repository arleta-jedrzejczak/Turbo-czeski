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

        for(var i = 0; i < helperArray.length; i++) {
            for(let j = 0; j < $scope.sentences.length; j++) {
                if(helperArray[i].value == $scope.sentences[j].result) {
                    $scope.points++;
                }
                else {

                }
            }
        }
        $scope.checkTotalPoints($scope.points, currentScreen);
    }

}]);