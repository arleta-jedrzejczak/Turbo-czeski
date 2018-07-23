myApp.controller('layoutController', ['$scope', '$http', '$route', '$location', function($scope, $http, $route, $location){

    $scope.screenAll = [];
    var _this = this;
    let curr;
    let prevScreen;
    let nextScreen;
    $scope.currTitle = '';

    $scope.dictionary = [
        { word: "Dobrý den", translate: "dzień dobry" },
        { word: "Dobré ráno", translate: "dzień dobry - rano" },
        { word: "Dobré odpoledne", translate: "dzień dobry - po południu" },
        { word: "Dobrý večer", translate: "dobry wieczór" },
        { word: "Ahoj", translate: "cześć" },
        { word: "Sbohem", translate: "do widzenia" },
        { word: "Na shledanou", translate: "do zobaczenia" },
        { word: "Dobrou noc", translate: "dobranoc" },
        { word: "Čau", translate: "pa" },
        { word: "Ano", translate: "tak" },
        { word: "Ne", translate: "nie" },
        { word: "Prosím", translate: "proszę" },
        { word: "Děkuji", translate: "dziękuję" },
        { word: "Omlouvám se", translate: "przepraszam" },
        { word: "Mluvíš český?", translate: "Mówisz po czesku?" },
        { word: "Já mluvím trochu česky.", translate: "Mówię trochę po czesku." },
        { word: "Mluvím anglicky.", translate: "Mówię po angielsku." },
        { word: "Jak se jmenuješ?", translate: "Jak masz na imię?" },
        { word: "Jmenuji se Anna.", translate: "Mam na imię Anna." },
        { word: "Odkud jsi?", translate: "Skąd jesteś?" },
        { word: "Jsem z Polska.", translate: "Jestem z Polski." }
    ]

    this.$onInit = function() {

        $http({
            method: 'GET',
            url: 'app/screens/screens.json'
            }).then(function successCallback(response) {
                let helperArr = response.data;
                helperArr.forEach(function(e){
                    if(e.exercise == true && e.points == null) {
                        e.points = 0;
                    }
                    else if(e.exercise == false) {
                        e.points = '--';
                    }
                })
                $scope.screenAll = helperArr;
                checkScreen();
            }, function errorCallback(response) {
                //
            });
            return $scope.screenAll;
    }

    function getTitle(screen) {
        let rightScreen = screen - 1;
        $scope.currTitle = $scope.screenAll[rightScreen].title;
    }

    function checkScreen() {
        curr = checkChars($location.$$path, '/');
        curr = Number(curr);
        prevScreen = curr - 1;
        nextScreen = curr + 1;
        if(curr == 1) {
            prevScreen = null;
        }
        if(curr == 9) {
            nextScreen = null;
        }
        $scope.currScreen = curr;
        $scope.prevScreen = prevScreen;
        $scope.nextScreen = nextScreen;
        getTitle(curr);
    }

    $scope.$on('$locationChangeStart', function() {
        checkScreen();
    });

    function checkChars(value, char) {
        let dirLast = value.length - 1;
        let dir = value.charAt(dirLast);
        if(dir === char) {
            value = value.slice(0, -1);
        }
        if(value.lastIndexOf(char) != -1) {
            let end = value.lastIndexOf(char) + 1;
            value = value.slice(end, value.length)
        }
        return value;
    }
    

    var button1 = document.getElementById('buttonInfo');
    var button2 = document.getElementById('buttonDictionary');
    var button3 = document.getElementById('buttonMap');
    var button4 = document.getElementById('buttonPoints');
    var button5 = document.getElementById('buttonCredits');
    var layout = document.querySelector('#layoutContent');
    var close = document.getElementsByClassName('close');
    var lastCurrent;
    var opened = false;

    var accentClose = function() {
        TweenMax.fromTo(close, 1, { scale: 2, color: '#f00' }, { scale: 1, ease:Power4.easeInOut, color: '#fff' });
        timeline.paused(true);
    }

    var timeline = new TimelineMax();

    TweenMax.set(layout, { x: 430, opacity: 0, display: 'none' });
    TweenMax.to(layout, 2, { opacity: 1, display: 'block' });

    timeline.paused(true);
    timeline.to(layout, 1, {x: 0, ease:Power4.easeOut, onComplete: accentClose });
    timeline.to(layout, 1, {x: 430, ease:Power4.easeOut, onComplete: accentClose });
    timeline.repeat(-1);
    
    $scope.callLayout = function(event) {

        _this.opened = false;
        let section = event.target.parentElement.nextElementSibling;
        let current = event.target;
        if(event.target.classList[0] == 'close') {
            section = event.target.parentElement;
            current = event.target.parentElement.previousElementSibling;
            _this.lastCurrent = current;
        }

        if(timeline._paused) {
            checkStatus();
            if(_this.opened == true) {
                if(_this.lastCurrent != current) {
                    addClass();
                    removeClass();
                }
                else if(_this.lastCurrent == current) {
                    window.setTimeout(addClass, 1000);
                    timeline.paused(false);
                }
            }
            else {
                removeClass();
                timeline.paused(false);
            }
        }

        function addClass() {
            section.parentNode.childNodes.forEach(function(e){
                if(e.nodeName !== '#text' && e.classList.length == 1) {
                    e.classList.add("hiddenSection");
                }
            })
        }

        function removeClass() {
            section.classList.remove("hiddenSection");
        }

        function checkStatus() {
            section.parentNode.childNodes.forEach(function(e){
                if(e.nodeName !== '#text' && e.classList.length == 1) {
                    _this.opened = true;
                }
            })
        }

        _this.lastCurrent = current;
    }

}]);