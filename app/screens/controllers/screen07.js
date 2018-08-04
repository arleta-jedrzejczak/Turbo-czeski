myApp.controller('screen07Controller', ['$scope', function($scope){

    let currentScreen = 7;

    $scope.sentences = [
        {question: "– Mluvíš český?", answear: "– Mluvím anglicky.", name: "q1", result: "false", id: 'stic70', num: 'text70'},
        {question: "– Jak se jmenuješ?", answear: "– Jmenuji se Anna.", name: "q2", result: "true", id: 'stic71', num: 'text71'},
        {question: "– Odkud jsi?", answear: "– Omlouvám se.", name: "q3", result: "false", id: 'stic72', num: 'text72'}
    ]
    let helperArray = [];
    const checkingPoints = document.getElementsByClassName('checkingPoints');
    const submit = document.getElementById('submit7');
    $scope.points = 0;
    $scope.disableBtn = true;
    let helperFinalArray = [];

    $scope.checkSubmit = function() {
        
        let helperPoints = 0;
        
        for(var i = 0; i < checkingPoints.length; i++) {
            if(checkingPoints[i].checked == true) {
                helperArray.push(checkingPoints[i]);
                helperPoints++;
            }
        }

        if(helperPoints == $scope.sentences.length) {
            $scope.disableBtn = false;
            submit.style.color = 'white';
            submit.style.cursor = 'pointer';
            submit.style.backgroundColor = '#FF5722';
        }

    }

    $scope.checkExercise = function() {
        
        $scope.points = 0;
        helperFinalArray = [];

        for(var i = 0; i < checkingPoints.length; i++) {
            if(checkingPoints[i].checked == true) {
                helperFinalArray.push(checkingPoints[i]);
            }
        }

        for(var i = 0; i < helperFinalArray.length; i++) {
            if(helperFinalArray[i].value == $scope.sentences[i].result) {
                $scope.points++;
            }
            else {

            }
        }
        $scope.checkTotalPoints($scope.points, currentScreen);
    }

    const screen7Bg = document.getElementById('screen7Bg');
    const cards = document.getElementById('cards7');
    const notepad = document.getElementById('notepad7');
    const text = document.getElementById('text7');
    const counter = document.getElementById('counter7');

    var timeline7 = new TimelineMax({});

    TweenMax.set(screen7Bg, {opacity: 0});
    TweenMax.set(notepad, {opacity: 0});
    TweenMax.set(text, {opacity: 0, y: 300});
    TweenMax.set(cards, {opacity: 0, y: -500});
    TweenMax.set(submit, {display: 'none', opacity: 0});
    TweenMax.set(counter, {display: 'none', opacity: 0});

    TweenMax.to(screen7Bg, 1, { opacity: 1 });

    timeline7.to(screen7Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline7.to(notepad, 1, {opacity: 1, ease:Power4.easeInOut});
    timeline7.to(text, 1, {opacity: 1, y: 0, ease:Power4.easeInOut});
    timeline7.to(text, 1, {opacity: 0, y: 200, display: 'none', ease:Power4.easeInOut}, "+=4");
    timeline7.to(notepad, 0.2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, '+=0.5');
    timeline7.to(cards, 1, {opacity: 1, y: -35, ease: Back.easeOut.config(1.7)});
    timeline7.to(submit, 1, {display: 'block', opacity: 1, ease:Power4.easeInOut}, '+=0.5');
    timeline7.to(counter, 1, {display: 'block', opacity: 1, ease:Power4.easeInOut}, "-=1");

}]);