myApp.controller('screen06Controller', ['$scope', function($scope){

    let currentScreen = 6;

    $scope.points = 0;
    const inputs = document.getElementsByClassName('input');
    const submit = document.getElementById('submit6');
    const results = ["D", "C", "E", "A", "B"];
    $scope.disableBtn = true;

    $scope.countLetters = function(event) {

        if(event.currentTarget.value.length >= 1) {
            event.currentTarget.value = event.currentTarget.value.slice(0, -1);
        }
        
    }

    $scope.checkLetter = function(event) {

        var helperPoints = 0;

        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value != "") {
                helperPoints++;
            }
        }
        
        if(helperPoints == results.length) {
            $scope.disableBtn = false;
            submit.style.color = 'white';
            submit.style.cursor = 'pointer';
            submit.style.backgroundColor = '#FF5722';
        }
        helperPoints = 0;
    }

    $scope.checkExercise = function() {
        
        $scope.points = 0;
        
        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value.toUpperCase() == results[i]) {
                $scope.points++;
            }
            else {

            }
        }
        $scope.checkTotalPoints($scope.points, currentScreen);
    }

    const screen6Bg = document.getElementById('screen6Bg');
    const tablet = document.getElementById('tablet6');
    const counter = document.getElementById('counter6');
    const text = document.getElementById('text6');
    const czechWords = document.getElementsByClassName('czechWords');
    const polishWords = document.getElementsByClassName('polishWords');

    TweenMax.set(screen6Bg, {opacity: 0});
    TweenMax.set(tablet, {opacity: 0});
    TweenMax.set(submit, {display: 'none', opacity: 0});
    TweenMax.set(counter, {display: 'none', opacity: 0});
    TweenMax.set(text, {opacity: 0, y: 300, scale: 1});
    TweenMax.set(czechWords, {opacity: 0, x: -200, display: 'none'});
    TweenMax.set(polishWords, {opacity: 0, x: -200, display: 'none'});


    var timeline6 = new TimelineMax({});

    TweenMax.to(screen6Bg, 1, { opacity: 1 });

    timeline6.to(text, 1, {scale: 1, opacity: 1, y: 0, ease:Power4.easeInOut}, "+=0.5");
    timeline6.to(text, 0.5, {scale: 2});
    timeline6.to(text, 0.5, {scale: 1, ease: Bounce.easeOut});
    timeline6.to(text, 1, {scale: 0}, "+=4");
    timeline6.to(screen6Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, "+=0.2");
    timeline6.to(tablet, 2, {opacity: 1});
    timeline6.staggerTo(czechWords, 0.5, {display: 'block', opacity: 1, x: 0 }, 0.1, "+=.5");
    timeline6.staggerTo(polishWords, 0.5, {display: 'block', opacity: 1, x: 0 }, 0.1, "+=.5");
    timeline6.to(submit, 1, {display: 'block', opacity: 1, ease:Power4.easeInOut}, '+=0.5');
    timeline6.to(counter, 1, {display: 'block', opacity: 1, ease:Power4.easeInOut}, "-=1");

}]);