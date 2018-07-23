myApp.controller('screen04Controller', ['$scope', function($scope){

    let currentScreen = 4;

    $scope.sentences = [
        {cz: "Mluvíš český?", pl: "Mówisz po czesku?", id: 'stic40', num: 'text40'},
        {cz: "Já mluvím trochu česky.", pl: "Mówię trochę po czesku.", id: 'stic41', num: 'text41'},
        {cz: "Mluvím anglicky.", pl: "Mówię po angielsku.", id: 'stic42', num: 'text42'},
        {cz: "Jak se jmenuješ?", pl: "Jak masz na imię?", id: 'stic43', num: 'text43'},
        {cz: "Jmenuji se Anna.", pl: "Mam na imię Anna.", id: 'stic44', num: 'text44'},
        {cz: "Odkud jsi?", pl: "Skąd jesteś?", id: 'stic45', num: 'text45'},
        {cz: "Jsem z Polska.", pl: "Jestem z Polski.", id: 'stic46', num: 'text46'}
    ];

    const screen4Bg = document.getElementById('screen4Bg');
    const cards = document.getElementById('cards4');
    const notepad = document.getElementById('notepad4');
    const text = document.getElementById('text4');
    const check = document.getElementById('check4');

    var timeline4 = new TimelineMax({onComplete: $scope.accentChevron});

    TweenMax.set(screen4Bg, {opacity: 0});
    TweenMax.set(notepad, {opacity: 0});
    TweenMax.set(text, {opacity: 0, y: 300});
    TweenMax.set(check, {opacity: 0, scale: 10});
    TweenMax.set(cards, {opacity: 0, y: -500});

    TweenMax.to(screen4Bg, 1, { opacity: 1 });

    timeline4.to(screen4Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline4.to(notepad, 1, {opacity: 1, ease:Power4.easeInOut});
    timeline4.to(text, 1, {opacity: 1, y: 0, ease:Power4.easeInOut});
    timeline4.to(check, 1, {opacity: 1, scale: 1, ease: Bounce.easeOut}, "+=3");
    timeline4.to(check, 1, {opacity: 0, scale: 0, ease:Power4.easeInOut}, "+=3");
    timeline4.to(text, 1, {opacity: 0, y: 200, ease:Power4.easeInOut}, "+=0.5");
    timeline4.to(notepad, 0.2, {opacity: 0, ease:Power4.easeInOut}, '+=0.5');
    timeline4.to(cards, 1, {opacity: 1, y: -35, ease: Back.easeOut.config(1.7)});
}]);