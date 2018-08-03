myApp.controller('screen09Controller', ['$scope', '$http',function($scope, $http){

    let currentScreen = 9;
    $scope.pointsAll;
    let tempAllPoints = 0;
    let tempPoints = 0;

    this.$onInit = function() {

        $http({
            method: 'GET',
            url: 'app/screens/screens.json'
            }).then(function successCallback(response) {
                let helperArr = response.data;
                helperArr.forEach(function(e){
                let num = 0;
                    if(e.exercise) {
                        tempPoints = sessionStorage.getItem(e.id);
                        num = parseFloat(tempPoints);
                        if(tempPoints == null) {
                            tempPoints = 0;
                            num = parseFloat(tempPoints);
                        }
                        tempAllPoints += num;
                        $scope.pointsAll = tempAllPoints;
                    }
                })
            }, function errorCallback(response) {
                //
            });
            
    }


    const dot = document.getElementById('dot9');
    const screen1Bg = document.getElementById('screen9Bg');
    const display = document.getElementById('display9');
    const text1 = document.getElementById('text91');
    const text2 = document.getElementById('text92');
    const text3 = document.getElementById('text93');
    const line = document.getElementById('line9');

    var timeline9 = new TimelineMax({onComplete: $scope.accentChevron});

    TweenMax.set(screen9Bg, {opacity: 0});
    TweenMax.set(display, {scale: 0});
    TweenMax.set(text1, {opacity: 0, x: 0});
    TweenMax.set(text3, {opacity: 0, x: 0});
    TweenMax.set(text2, {opacity: 0, scale: 0});
    TweenMax.set(dot, {opacity: 0});
    TweenMax.set(line, {opacity: 0});

    TweenMax.to(screen1Bg, 1, { opacity: 1 });

    timeline9.to(screen9Bg, 2, {opacity: 0, display: 'none', ease:Power4.easeInOut}, 1);
    timeline9.to(display, 2, {scale: 0.80, ease:Power4.easeInOut}, "+=0.2");
    timeline9.to(dot, 1, {opacity: 1}, "+=0.2");
    timeline9.to(line, 1, {opacity: 1}, "-=0.2");
    timeline9.from(dot, 5, {x: -500}, "+=0.5");
    timeline9.to(text1, 2, {opacity: 1, ease:Power4.easeInOut}, "-=6");
    timeline9.to(text2, 2, {opacity: 1, scale: 1, ease:Power4.easeInOut}, "-=6");
    timeline9.to(text3, 2, {opacity: 1, ease:Power4.easeInOut}, "-=5.5");

}]);