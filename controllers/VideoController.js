app.controller('VideoController', ['$scope','$routeParams','YT_event', function ($scope,$routeParams,YT_event) {
    var retrived = null;
    $scope.vids = [];
    var retrived = localStorage.getItem("VIDEO");
    $scope.vids = JSON.parse(retrived);
    $scope.current = $scope.vids[$routeParams.id];
    $scope.paused = 0;
    $scope.adnotation_c = '';
    $scope.yt={
        width:750,
        height:480,
        videoId:$scope.current.id
    };
    $scope.YT_event = YT_event;
    $scope.sendControlEvent = function (yt_event) {
        this.$broadcast(yt_event);
    };
   /* $scope.$on("$destroy", function () {
        this.$broadcast(4);
    });*/
    $scope.$on(YT_event.STATUS_CHANGE, function (event, data) {
        $scope.paused = Math.trunc((data+5) / 60) + ":" + Math.trunc((data+5) % 60);
    });
    $scope.submitTextAdn = function () {
        $scope.sendControlEvent(YT_event.PAUSE);
        var tmp = {
            id:$scope.current.adnotari.length,
            tip: 'text',
            timp: $scope.paused,
            valoare: $scope.adnotation_c
        };
        $scope.adnotation_c = '';
        $scope.vids[$routeParams.id].adnotari.push(tmp);
        localStorage.clear();
        localStorage.setItem("VIDEO", JSON.stringify($scope.vids));
    };
    $scope.submitVideoAdn = function () {
        $scope.sendControlEvent(YT_event.PAUSE);
        var tmp = {
            id: $scope.current.adnotari.length,
            tip: 'video',
            timp: $scope.paused,
            valoare: $scope.adnotation_c
        };
        $scope.adnotation_c = '';
        $scope.vids[$routeParams.id].adnotari.push(tmp);
        localStorage.clear();
        localStorage.setItem("VIDEO", JSON.stringify($scope.vids));
    };
    $scope.removeAdnot = function (item) {
        var index = -1;
        console.log(item);
        for (var i = 0; i < $scope.vids[$routeParams.id].adnotari.length; i++) {
            if (item.id === $scope.vids[$routeParams.id].adnotari[i].id) index = i;
        }
        console.log(item);
        if (index !== -1) {
            $scope.vids[$routeParams.id].adnotari.splice(index, 1);
            localStorage.clear();
            localStorage.setItem("VIDEO", JSON.stringify($scope.vids));
        }
    };
}]);