myApp.controller('screen04Controller', ['$scope', function($scope){

    let currentScreen = 4;

    $scope.sentences = [
        {cz: "Mluvíš český?", pl: "Mówisz po czesku?", id: 'stic0', num: 'text0'},
        {cz: "Já mluvím trochu česky.", pl: "Mówię trochę po czesku.", id: 'stic1', num: 'text1'},
        {cz: "Mluvím anglicky.", pl: "Mówię po angielsku.", id: 'stic2', num: 'text2'},
        {cz: "Jak se jmenuješ?", pl: "Jak masz na imię?", id: 'stic3', num: 'text3'},
        {cz: "Jmenuji se Anna.", pl: "Mam na imię Anna.", id: 'stic4', num: 'text4'},
        {cz: "Odkud jsi?", pl: "Skąd jesteś?", id: 'stic5', num: 'text5'},
        {cz: "Jsem z Polska.", pl: "Jestem z Polski.", id: 'stic6', num: 'text6'}
    ];

    const screen4Bg = document.getElementById('screen4Bg');

    var timeline2 = new TimelineMax();

    TweenMax.set(screen4Bg, {opacity: 0});

    TweenMax.to(screen4Bg, 1, { opacity: 1 });

    timeline2.to(screen4Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline2.from("#stic0", 1, {opacity: 0, ease:Power4.easeInOut});

}]);