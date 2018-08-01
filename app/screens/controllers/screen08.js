myApp.controller('screen08Controller', ['$scope', function($scope){

    let currentScreen = 8;

    $scope.words = ["jmenujes", "jmenuji", "odkud", "mluvim", "jsem", "dekuji", "shledanou"];
    $scope.wordsCzech = ["jmenuješ", "jmenuji", "odkud", "mluvím", "jsem", "děkuji", "shledanou"];

    $scope.disableBtn = true;
    const inputs = document.getElementsByClassName('words8');
    const submit = document.getElementById('submit8');
    $scope.points = 0;

    $scope.countLetters = function(event) {

        if(event.currentTarget.value.length >= event.currentTarget.name.length) {
            event.currentTarget.value = event.currentTarget.value.slice(0, -1);
        }

    }

    $scope.checkValue = function(event) {

        var helperPoints = 0;

        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value.length == inputs[i].name.length) {
                helperPoints++;
            }
        }

        if(helperPoints == $scope.words.length) {
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
            if((inputs[i].value.toLowerCase() == $scope.words[i]) || (inputs[i].value.toLowerCase() == $scope.wordsCzech[i])) {
                $scope.points++;
            }
            else {

            }
        }
        $scope.checkTotalPoints($scope.points, currentScreen);
    }

    const screen8Bg = document.getElementById('screen8Bg');
    const laptop = document.getElementById('laptop8');
    const text = document.getElementById('text8');
    const counter = document.getElementById('counter8');
    const desktop = document.getElementById('desktop8');
    const sentences = document.getElementsByClassName('sentence8');

    var timeline8 = new TimelineMax({});

    TweenMax.set(screen8Bg, {opacity: 0});
    TweenMax.set(text, {opacity: 0, y: 300});
    TweenMax.set(laptop, {opacity: 0, y: -500});
    TweenMax.set(submit, {display: 'none', opacity: 0});
    TweenMax.set(counter, {display: 'none', opacity: 0});
    TweenMax.set(desktop, {opacity: 0, scale: 0})
    TweenMax.set(sentences, {opacity: 0, x: -200, display: 'none'});

    TweenMax.to(screen8Bg, 1, { opacity: 1 });

    timeline8.to(screen8Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline8.to(laptop, 1, {opacity: 1, y: -15, ease: Back.easeOut.config(1.7)});
    timeline8.to(desktop, 1, {opacity: 1, scale: 1, ease:Power4.easeInOut})
    timeline8.to(text, 1, {opacity: 1, y: 0, ease: Bounce.easeOut});
    timeline8.to(text, 1, {opacity: 0, y: 200, ease: Bounce.easeIn}, "+=10");
    timeline8.staggerTo(sentences, 0.5, {display: 'block', opacity: 1, x: 0 }, 0.1, "+=.5");
    timeline8.to(submit, 1, {display: 'block', opacity: 1, ease:Power4.easeInOut}, '+=0.5');
    timeline8.to(counter, 1, {display: 'block', opacity: 1, ease:Power4.easeInOut}, "-=1");

}]);