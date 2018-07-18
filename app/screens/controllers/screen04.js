myApp.controller('screen04Controller', ['$scope', function($scope){

    let currentScreen = 4;

    $scope.sentences = [
        {cz: "Mluvíš český?", pl: "Mówisz po czesku?"},
        {cz: "Já mluvím trochu česky.", pl: "Mówię trochę po czesku."},
        {cz: "Mluvím anglicky.", pl: "Mówię po angielsku."},
        {cz: "Jak se jmenuješ?", pl: "Jak masz na imię?"},
        {cz: "Jmenuji se Anna.", pl: "Mam na imię Anna."},
        {cz: "Odkud jsi?", pl: "Skąd jesteś?"},
        {cz: "Jsem z Polska.", pl: "Jestem z Polski."}
    ];

    const screen4Bg = document.getElementById('screen4Bg');

    var timeline2 = new TimelineMax();

    TweenMax.set(screen4Bg, {opacity: 0});

    TweenMax.to(screen4Bg, 1, { opacity: 1 });

    timeline2.to(screen4Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);

}]);