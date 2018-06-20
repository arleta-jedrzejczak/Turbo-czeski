myApp.controller('screen02Controller', ['$scope', function($scope){

    let currentScreen = 2;

    $scope.greetings = ["Dobrý den", "Dobré ráno", "Dobré odpoledne", "Dobrý večer", "Ahoj"];
    $scope.plgreetings = ["dzień dobry", "dzień dobry - rano", "dzień dobry - po południu", "dobry wieczór", "cześć"];

    $scope.goodbyes = ["Sbohem", "Na shledanou", "Ahoj", "Dobrou noc", "Čau"];
    $scope.plgoodbyes = ["do widzenia", "do zobaczenia", "cześć", "dobranoc", "pa"];

}]);