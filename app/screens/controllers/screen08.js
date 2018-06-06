myApp.controller('screen08Controller', ['$scope', function($scope){

    $scope.words = ["jmenujes", "jmenuji", "odkud", "mluvim", "jsem", "dekuji", "shledanou"];
    $scope.wordsCzech = ["jmenuješ", "jmenuji", "odkud", "mluvím", "jsem", "děkuji", "shledanou"];

    $scope.disableBtn = true;
    $scope.inputs = document.getElementsByClassName('words');

    $scope.countLetters = function(event) {

        if(event.currentTarget.value.length >= event.currentTarget.name.length) {
            event.currentTarget.value = event.currentTarget.value.slice(0, -1);
        }

    }

    $scope.checkValue = function(event) {

        var helperPoints = 0;

        for(var i = 0; i < $scope.inputs.length; i++) {
            if($scope.inputs[i].value.length == $scope.inputs[i].name.length) {
                helperPoints++;
            }
        }
        console.log(helperPoints);
        
        if(helperPoints == $scope.words.length) {
            $scope.disableBtn = false;
        }
        helperPoints = 0;
    }

    $scope.checkExercise = function() {
        $scope.points = 0;
        
        for(var i = 0; i < $scope.inputs.length; i++) {
            if(($scope.inputs[i].value.toLowerCase() == $scope.words[i]) || ($scope.inputs[i].value.toLowerCase() == $scope.wordsCzech[i])) {
                console.log('Done!');
                $scope.points++;
            }
            else {
                console.log('Wrong!');
            }
        }
    }

}]);