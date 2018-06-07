myApp.controller('screen05Controller', ['$scope', function($scope){

    $scope.currentScreen = 5;

    $scope.drags = [
        {title: "dobré odpoledne", category: "greetings", name: "d1"},
        {title: "čau", category: "goodbyes", name: "d2"},
        {title: "prosím", category: "behaviours", name: "d3"},
        {title: "dobrý večer", category: "greetings", name: "d4"},
        {title: "sbohem", category: "goodbyes", name: "d5"},
        {title: "děkuji", category: "behaviours", name: "d6"},
        {title: "na shledanou", category: "goodbyes", name: "d7"}
    ]

    $scope.checkButton = document.getElementsByClassName('checkButton');
    $scope.points = 0;
    $scope.disableBtn = true;

    $scope.checkCategory = function(event) {

        event.target.checked = true;
        console.log(event);

        var tempName = event.target.name;
        var name = document.getElementsByName(tempName);

        for(var i = 0; i < name.length; i++) {
            if(name[i].id != event.target.id) {
                name[i].checked = false;
            }
        }
        
        $scope.helperPoints = 0;
        $scope.countArray = [];
        
        for(var i = 0; i < $scope.checkButton.length; i++) {
            if($scope.checkButton[i].checked == true) {
                $scope.countArray.push($scope.checkButton[i]);
                $scope.helperPoints++;
            }
        }

        if($scope.helperPoints == $scope.drags.length) {
            $scope.disableBtn = false;
        }

    }

    $scope.checkExercise = function() {

        for(var i = 0; i < $scope.countArray.length; i++) {
            if($scope.countArray[i].id == $scope.drags[i].category) {
                console.log('Done!');
                $scope.points++;
            }
            else {
                console.log('Wrong!');
            }
        }
        $scope.checkTotalPoints($scope.points, $scope.currentScreen);
    }

}]);