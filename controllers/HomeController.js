app.controller('HomeController', ['$scope',function ($scope) {
    $scope.videos = [];
    var retrived = localStorage.getItem("VIDEO");
    if (retrived !== null) {
        $scope.videos = JSON.parse(retrived);
    }
    $scope.title_c = '';
    $scope.link = '';
    $scope.submit = function () {
        if ($scope.link) {
            var vidId = getVideoId(this.link);
            for (var i = 0; i < $scope.videos.length; i++) {
                console.log(vidId + ' compare to ' + $scope.videos[i].id);
                var n = vidId.localeCompare($scope.videos[i].id);
                console.log(n);
                if (n === 0) {
                    $scope.link = '';
                    $scope.title_c = '';
                    alert("You can't add duplicate videos!");
                    return;
                }
            }
            var aux = {
                id: vidId,
                title: $scope.title_c,
                imagine: 'https://img.youtube.com/vi/' + vidId + '/0.jpg',
                adnotari: [{id:0,tip:'text',timp:'1:11',valoare:'yolo'}]
            };
            $scope.videos.push(aux);
            localStorage.clear();
            localStorage.setItem("VIDEO",JSON.stringify($scope.videos));
            $scope.link = '';
            $scope.title_c = '';
        }
    };
    $scope.deleteVid = function (index) {
        $scope.videos.splice(index, 1);
        localStorage.clear();
        localStorage.setItem("VIDEO", JSON.stringify($scope.videos));
    }
}]);
