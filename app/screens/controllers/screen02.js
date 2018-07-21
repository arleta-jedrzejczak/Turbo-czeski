myApp.controller('screen02Controller', ['$scope', '$route', function($scope, $route){

    let currentScreen = 2;

    $scope.greetings = ["Dobrý den!", "Dobré ráno!", "Dobré odpoledne!", "Dobrý večer!", "Ahoj!"];
    $scope.plgreetings = ["Dzień dobry!", "Dzień dobry! (rano)", "Dzień dobry! (po południu)", "Dobry wieczór!", "Cześć!"];

    $scope.goodbyes = ["Sbohem!", "Na shledanou!", "Ahoj!", "Dobrou noc!", "Čau!"];
    $scope.plgoodbyes = ["Do widzenia!", "Do zobaczenia!", "Cześć!", "Dobranoc!", "Pa!"];


    const screen2Bg = document.getElementById('screen2Bg');
    const tablet = document.getElementById('tablet2');
    const order = document.getElementById('order2');
    const order2 = document.getElementById('order22');
    const hello1 = document.getElementById('hello21');
    const hello2 = document.getElementById('hello22');
    const hello3 = document.getElementById('hello23');
    const greetCz = document.getElementById('greetCz');
    const greetPl = document.getElementById('greetPl');
    const goodbCz = document.getElementById('goodbCz');
    const goodbPl = document.getElementById('goodbPl');

    var timeline2 = new TimelineMax({onComplete: $scope.accentChevron});

    TweenMax.set(screen2Bg, {opacity: 0});
    TweenMax.set(tablet, {opacity: 0, scale: 0});
    TweenMax.set(order, {opacity: 0, y: 100});
    TweenMax.set(order2, {opacity: 0, y: 100});
    TweenMax.set(hello1, {scale: 0});
    TweenMax.set(hello2, {scale: 0});
    TweenMax.set(hello3, {scale: 0});
    TweenMax.set(greetCz, {opacity: 0, x: 100});
    TweenMax.set(greetPl, {opacity: 0, x: 100});
    TweenMax.set(goodbCz, {opacity: 0, x: 100});
    TweenMax.set(goodbPl, {opacity: 0, x: 100});
    
    TweenMax.to(screen2Bg, 1, { opacity: 1 });

    timeline2.to(screen2Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline2.to(tablet, 2, {opacity: 1, scale: 1, ease: Bounce.easeOut});
    timeline2.to(hello1, 1, {scale: 1, ease: Elastic.easeOut.config(1, 0.30)});
    timeline2.to(hello2, 1, {scale: 1, ease: Elastic.easeOut.config(1, 0.30)}, "-=0.5");
    timeline2.to(hello3, 1, {scale: 1, ease: Elastic.easeOut.config(1, 0.30)}, "-=0.5");
    timeline2.to(order, 1, {opacity:1, y: 0});
    timeline2.to(greetCz, 1, {opacity:1, x: 0, ease:Power4.easeOut}, "+=2");
    timeline2.to(greetPl, 1, {opacity:1, x: 0, ease:Power4.easeOut}, "-=0.8");
    timeline2.to(order2, 1, {opacity:1, y: 0}, "+=2");
    timeline2.to(goodbCz, 1, {opacity:1, x: 0, ease:Power4.easeOut}, "+=1");
    timeline2.to(goodbPl, 1, {opacity:1, x: 0, ease:Power4.easeOut}, "-=0.8");

}]);