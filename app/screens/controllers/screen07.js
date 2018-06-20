myApp.controller('screen07Controller', ['$scope', function($scope){

    let currentScreen = 8;

    $scope.sentences = [
        {question: "Mluvíš český?", answear: "Mluvím anglicky.", name: "q1", result: "false"},
        {question: "Jak se jmenuješ?", answear: "Jmenuji se Anna.", name: "q2", result: "true"},
        {question: "Odkud jsi?", answear: "Omlouvám se.", name: "q3", result: "false"}
    ]

    const checkingPoints = document.getElementsByClassName('checkingPoints');
    let points = 0;
    $scope.disableBtn = true;

    $scope.checkSubmit = function() {
        
        let helperPoints = 0;
        let helperArray = [];
        
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
            if(helperArray[i].value == $scope.sentences[i].result) {
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