myApp.controller('layoutController', ['$scope', '$http', function($scope, $http){

    $scope.screenAll = [];

    $scope.dictionary = [
        { word: "Dobrý den", translate: "dzień dobry" },
        { word: "Dobré ráno", translate: "dzień dobry - rano" },
        { word: "Dobré odpoledne", translate: "dzień dobry - po południu" },
        { word: "Dobrý večer", translate: "dobry wieczór" },
        { word: "Ahoj", translate: "cześć" },
        { word: "Sbohem", translate: "do widzenia" },
        { word: "Na shledanou", translate: "do zobaczenia" },
        { word: "Dobrou noc", translate: "dobranoc" },
        { word: "Čau", translate: "pa" },
        { word: "Ano", translate: "tak" },
        { word: "Ne", translate: "nie" },
        { word: "Prosím", translate: "proszę" },
        { word: "Děkuji", translate: "dziękuję" },
        { word: "Omlouvám se", translate: "przepraszam" },
        { word: "Mluvíš český?", translate: "Mówisz po czesku?" },
        { word: "Já mluvím trochu česky.", translate: "Mówię trochę po czesku." },
        { word: "Mluvím anglicky.", translate: "Mówię po angielsku." },
        { word: "Jak se jmenuješ?", translate: "Jak masz na imię?" },
        { word: "Jmenuji se Anna.", translate: "Mam na imię Anna." },
        { word: "Odkud jsi?", translate: "Skąd jesteś?" },
        { word: "Jsem z Polska.", translate: "Jestem z Polski." }
    ]

    this.$onInit = function() {

        $http({
            method: 'GET',
            url: 'app/screens/screens.json'
            }).then(function successCallback(response) {
                let helperArr = response.data;
                helperArr.forEach(function(e){
                    console.log(e.points);
                    if(e.exercise == true && e.points == null) {
                        e.points = 0;
                    }
                    else if(e.exercise == false) {
                        e.points = '--';
                    }
                    console.log(e.points);
                })
                $scope.screenAll = helperArr;
                console.log($scope.screenAll);
            }, function errorCallback(response) {
                //
            });

        return $scope.screenAll;
    }
    
}]);