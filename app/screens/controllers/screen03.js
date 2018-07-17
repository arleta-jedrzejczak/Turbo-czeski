myApp.controller('screen03Controller', ['$scope', function($scope){

    let currentScreen = 3;

    $scope.answears = ["Ano", "Ne"];
    $scope.planswears = ["tak", "nie"];

    $scope.behaviours = ["Prosím", "Děkuji", "Omlouvám se"];
    $scope.plbehaviours = ["proszę", "dziękuję", "przepraszam"];


    const screen3Bg = document.getElementById('screen3Bg');
    const desk = document.getElementById('desk3');

    var timeline2 = new TimelineMax();

    TweenMax.set(screen3Bg, {opacity: 0});
    TweenMax.set(desk, {opacity: 0, x: -500});

    TweenMax.to(screen3Bg, 1, { opacity: 1 });

    timeline2.to(screen3Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline2.to(desk, 2, {opacity: 1, x: 0, ease: Elastic.easeOut.config(1, 0.35)});

}]);