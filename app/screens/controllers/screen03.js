myApp.controller('screen03Controller', ['$scope', function($scope){

    let currentScreen = 3;

    $scope.answears = ["Ano", "Ne"];
    $scope.planswears = ["Tak", "Nie"];

    $scope.behaviours = ["Prosím", "Děkuji", "Omlouvám se"];
    $scope.plbehaviours = ["Proszę", "Dziękuję", "Przepraszam"];


    const screen3Bg = document.getElementById('screen3Bg');
    const desk = document.getElementById('desk3');
    const order = document.getElementById('order3');
    const order2 = document.getElementById('order32');
    const ansCz = document.getElementById('ansCz');
    const ansPl = document.getElementById('ansPl');
    const behCz = document.getElementById('behCz');
    const behPl = document.getElementById('behPl');
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');
    const please = document.getElementById('please');
    const thanks = document.getElementById('thanks');
    const sorry = document.getElementById('sorry');

    var timeline2 = new TimelineMax();

    TweenMax.set(screen3Bg, {opacity: 0});
    TweenMax.set(desk, {opacity: 0, x: -500});
    TweenMax.set(order, {opacity: 0, y: 100});
    TweenMax.set(order2, {opacity: 0, y: 100});
    TweenMax.set(ansCz, {opacity: 0, scale: 0});
    TweenMax.set(ansPl, {opacity: 0, scale: 0});
    TweenMax.set(behCz, {opacity: 0, scale: 0});
    TweenMax.set(behPl, {opacity: 0, scale: 0});
    TweenMax.set(yes, {opacity: 0, scale: 10});
    TweenMax.set(no, {opacity: 0, scale: 10});
    TweenMax.set(please, {opacity: 0, scale: 10});
    TweenMax.set(thanks, {opacity: 0, scale: 10});
    TweenMax.set(sorry, {opacity: 0, scale: 10});

    TweenMax.to(screen3Bg, 1, { opacity: 1 });

    timeline2.to(screen3Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline2.to(desk, 2, {opacity: 1, x: 0, ease: Elastic.easeOut.config(1, 0.35)});
    timeline2.to(yes, 1, {opacity: 1, scale: 1, ease: Bounce.easeOut});
    timeline2.to(no, 1, {opacity: 1, scale: 1, ease: Bounce.easeOut}, "+=0.5");
    timeline2.to(order, 1, {opacity: 1, y: 0, ease: Back.easeOut.config(1.7)}, "+=1");
    timeline2.to(ansCz, 1, {opacity: 1, scale: 1}, "+=3");
    timeline2.to(ansPl, 1, {opacity: 1, scale: 1}, "+=0.5");
    timeline2.to(order2, 1, {opacity: 1, y: 0, ease: Back.easeOut.config(1.7)}, "+=2");
    timeline2.to(please, 1, {opacity: 1, scale: 1, ease: Bounce.easeOut}, "+=1");
    timeline2.to(thanks, 1, {opacity: 1, scale: 1, ease: Bounce.easeOut}, "+=0.5");
    timeline2.to(sorry, 1, {opacity: 1, scale: 1, ease: Bounce.easeOut}, "+=0.5");
    timeline2.to(behCz, 1, {opacity: 1, scale: 1}, "+=2");
    timeline2.to(behPl, 1, {opacity: 1, scale: 1}, "+=0.5");

}]);