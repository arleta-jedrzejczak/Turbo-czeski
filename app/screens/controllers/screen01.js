myApp.controller('screen01Controller', ['$scope', '$route', function($scope, $route){

    let currentScreen = 1;
    const dot = document.getElementById('dot');
    const secondBg = document.getElementById('screenBg');
    const screen1 = document.getElementById('screenPhoto');

    var timeline1 = new TimelineMax();

    TweenMax.set(secondBg, {scale: 0});
    TweenMax.set(screen1, {opacity: 1});

    timeline1.to(screen1, 1, {opacity: 0}, 1)
    timeline1.to(secondBg, 1, {scale: 0.80, ease:Power4.easeInOut}, "+=0.2");
    timeline1.from(dot, 5, {x: -600}, "+=0.5");

}]);

// myApp.controller('screen01Controller', ['$scope', '$route', function($scope, $route){

//     let currentScreen = 1;

//     $scope.dom = 'dom';

//     console.log('ghghghg');

//     this.$onInit = function() {

//         var dot = document.getElementById('dot');
//         // var timeline1 = new TimelineMax();

//         TweenMax.to(dot, 2, { backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut });

//         console.log(dot);

//         // timeline.paused(true);
//         // timeline1.from(dot, 1, {x: 0, ease:Power4.easeOut});
//         // timeline.to(layout, 1, {x: 430, ease:Power4.easeOut, onComplete: consoleText});
//         // timeline.repeat(-1);

//     }
    
// }]);