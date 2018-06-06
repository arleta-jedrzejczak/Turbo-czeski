myApp.controller('screen05Controller', ['$scope', function($scope){

    $scope.drags = [
        {title: "dobré odpoledne", category: "greetings", name: "d1"},
        {title: "čau", category: "goodbyes", name: "d2"},
        {title: "prosím", category: "behaviours", name: "d3"},
        {title: "dobrý večer", category: "greetings", name: "d4"},
        {title: "sbohem", category: "goodbyes", name: "d5"},
        {title: "děkuji", category: "behaviours", name: "d6"},
        {title: "na shledanou", category: "goodbyes", name: "d7"}
    ]

    $scope.checkingPoints = document.getElementsByClassName('checkingPoints');
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
        
        $scope.points = 0;
        $scope.countArray = [];
        
        // for(var i = 0; i < $scope.checkingPoints.length; i++) {
        //     if($scope.checkingPoints[i].checked == true) {
        //         $scope.countArray.push($scope.checkingPoints[i]);
        //         $scope.points++;
        //     }
        // }

        // if($scope.points == $scope.sentences.length) {
        //     $scope.disableBtn = false;
        // }

    }

    // $scope.checkExercise = function() {

    //     for(var i = 0; i < $scope.helperArray.length; i++) {
    //         if($scope.helperArray[i].value == $scope.sentences[i].result) {
    //             console.log('Done!');
    //             $scope.points++;
    //         }
    //         else {
    //             console.log('Wrong!');
    //         }
    //     }
        
    // }

}]);