myApp.controller('screen05Controller', ['$scope', function($scope){

    let currentScreen = 5;

    $scope.drags = [
        {title: "čau", category: "goodbyes", name: "d2"},
        {title: "dobré odpoledne", category: "greetings", name: "d1"},
        {title: "sbohem", category: "goodbyes", name: "d5"},
        {title: "děkuji", category: "behaviours", name: "d6"},
        {title: "prosím", category: "behaviours", name: "d3"},
        {title: "dobrý večer", category: "greetings", name: "d4"},
        {title: "na shledanou", category: "goodbyes", name: "d7"}
    ]

    const checkButton = document.getElementsByClassName('checkButton5');
    const submit = document.getElementById('submit5');
    $scope.points = 0;
    $scope.disableBtn = true;

    $scope.checkCategory = function(event) {

        event.target.checked = true;

        var tempName = event.target.name;
        var name = document.getElementsByName(tempName);

        for(var i = 0; i < name.length; i++) {
            if(name[i].id != event.target.id) {
                name[i].checked = false;
            }
        }
        
        let helperPoints = 0;
        $scope.countArray = [];
        
        for(var i = 0; i < checkButton.length; i++) {
            if(checkButton[i].checked == true) {
                $scope.countArray.push(checkButton[i]);
                helperPoints++;
            }
        }

        if(helperPoints == $scope.drags.length) {
            $scope.disableBtn = false;
            submit.style.color = 'white';
            submit.style.cursor = 'pointer';
            submit.style.backgroundColor = '#FF5722';
        }

    }

    $scope.checkExercise = function() {
        
        $scope.points = 0;

        for(var i = 0; i < $scope.countArray.length; i++) {
            if($scope.countArray[i].id == $scope.drags[i].category) {
                $scope.points++;
            }
            else {

            }
        }
        $scope.checkTotalPoints($scope.points, currentScreen);
    }



    const screen5Bg = document.getElementById('screen5Bg');
    const notepad = document.getElementById('notepad5');
    const text = document.getElementById('text5');
    const drag = document.getElementById('drag5');
    const counter = document.getElementById('counter5');

    var timeline5 = new TimelineMax({});

    TweenMax.set(screen5Bg, {opacity: 0});
    TweenMax.set(notepad, {opacity: 0, x: 500});
    TweenMax.set(text, {opacity: 0, y: 300});
    TweenMax.set(drag, {opacity: 0, scale: 3});
    TweenMax.set(submit, {display: 'none', opacity: 0});
    TweenMax.set(counter, {display: 'none', opacity: 0});

    TweenMax.to(screen5Bg, 1, { opacity: 1 });

    timeline5.to(screen5Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline5.to(notepad, 2, {opacity: 1, ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}), x: 0});
    timeline5.to(text, 1, {opacity: 1, y: 0, ease:Power4.easeInOut});
    timeline5.to(text, 1, {opacity: 0, y: 200, ease:Power4.easeInOut}, "+=5");
    timeline5.to(notepad, 1, {opacity: 0, ease:Power4.easeInOut}, '+=0.5');
    timeline5.to(screen5Bg, 2, {opacity: 1, display: 'block', ease:Power4.easeInOut});
    timeline5.to(drag, 1, {opacity: 1, scale: 1, ease: Bounce.easeOut});
    timeline5.to(submit, 1, {opacity: 1, display: 'block', ease:Power4.easeInOut}, '+=0.5');
    timeline5.to(counter, 1, {opacity: 1, display: 'block', ease:Power4.easeInOut}, "-=1");

}]);