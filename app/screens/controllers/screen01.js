myApp.controller('screen01Controller', ['$scope', '$route', function($scope, $route){

    let currentScreen = 1;
    const dot = document.getElementById('dot');
    const screen1Bg = document.getElementById('screen1Bg');
    const display = document.getElementById('display1');
    const text1 = document.getElementById('text');
    const text2 = document.getElementById('text2');
    const line = document.getElementById('line');



    var timeline1 = new TimelineMax();

    TweenMax.set(screen1Bg, {opacity: 0});
    TweenMax.set(display, {scale: 0});
    TweenMax.set(text1, {opacity: 0, x: 0});
    TweenMax.set(text2, {opacity: 0, display: 'none'});
    TweenMax.set(dot, {opacity: 0});
    TweenMax.set(line, {opacity: 0});

    TweenMax.to(screen1Bg, 1, { opacity: 1 });

    timeline1.to(screen1Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline1.to(display, 2, {scale: 0.80, ease:Power4.easeInOut}, "+=0.2");
    timeline1.to(dot, 1, {opacity: 1}, "+=0.2");
    timeline1.to(line, 1, {opacity: 1}, "-=0.2");
    timeline1.from(dot, 5, {x: -500}, "+=0.5");
    timeline1.to(text1, 2, {opacity: 1, ease:Power4.easeInOut}, "-=6");
    timeline1.to(text2, 0.2, {opacity: 1, display: 'block', ease:Power4.easeInOut}, "-=6");

}]);