myApp.controller('screen05Controller', ['$scope', function($scope){

    $scope.drags = [
        {name: "dobré odpoledne", category: "greetings", moved: false},
        {name: "čau", category: "goodbyes", moved: false},
        {name: "prosím", category: "behaviours", moved: false},
        {name: "dobrý večer", category: "greetings", moved: false},
        {name: "sbohem", category: "goodbyes", moved: false},
        {name: "děkuji", category: "behaviours", moved: false},
        {name: "na shledanou", category: "goodbyes", moved: false}
    ]

    $scope.holders = ["Powitania", "Pożegnania", "Zwroty grzecznościowe"];

    $scope.elements = document.getElementsByClassName('dragables')[0];
    $scope.fields = document.getElementsByClassName('holders');

    for($scope.field of $scope.fields) {
        $scope.field.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        $scope.field.addEventListener("dragenter", function(e) {
            e.preventDefault();
        });
        $scope.field.addEventListener("drop", function() {
            this.append(e.target);
        });
      }

}]);