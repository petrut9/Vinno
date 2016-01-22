app.controller('VideoController', ['$scope','$routeParams','YT_event', function ($scope,$routeParams,YT_event) {
    var retrived = null;
    $scope.vids = [];
    var retrived = localStorage.getItem("VIDEO");
    $scope.vids = JSON.parse(retrived);
    $scope.current = $scope.vids[$routeParams.id];
    $scope.paused = 0;
    $scope.yt={
        width:600,
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
        $scope.paused = Math.trunc(data/60)+":"+Math.trunc(data%60);
    })
}]);