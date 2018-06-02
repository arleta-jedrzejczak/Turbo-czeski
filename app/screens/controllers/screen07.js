myApp.controller('screen07Controller', ['$scope', function($scope){

    $scope.points = 0;

    $scope.sentences = [
        {question: "Mluvíš český?", answear: "Mluvím anglicky.", name: "q1", result: "false"},
        {question: "Jak se jmenuješ?", answear: "Jmenuji se Anna.", name: "q2", result: "true"},
        {question: "Odkud jsi?", answear: "Omlouvám se.", name: "q3", result: "false"}
    ]

    $scope.checkingPoints = document.getElementsByClassName('checkingPoints');

    $scope.checkExercise = function() {

        $scope.points = 0;
        $scope.helperArray = [];
        
        for(var i = 0; i < $scope.checkingPoints.length; i++) {
            if($scope.checkingPoints[i].checked == true) {
                $scope.helperArray.push($scope.checkingPoints[i]);
                // console.log('Done!');
                // $scope.points++;
            }
            else {
                // console.log('Wrong!');
            }
        }

        for(var i = 0; i < $scope.helperArray.length; i++) {
            if($scope.helperArray[i].value == $scope.sentences[i].result) {
                console.log('Done!');
                $scope.points++;
            }
            else {
                console.log('Wrong!');
            }
        }
        
    }

}]);