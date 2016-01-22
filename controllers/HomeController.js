app.controller('HomeController', ['$scope','sharedProperties', function ($scope,sharedProperties) {
    $scope.videos = [];
    var retrived = localStorage.getItem("VIDEO");
    if (retrived !== null) {
        $scope.videos = JSON.parse(retrived);
    }
    $scope.link = 'https://www.youtube.com/watch?v=4eS6Bu1yDvk';
    $scope.submit = function () {
        if ($scope.link) {
            var aux = {
                id: getVideoId(this.link),
                imagine: 'https://img.youtube.com/vi/' + getVideoId(this.link) + '/0.jpg',
                adnotari: [{tip:'text',timp:'1:11',valoare:'yolo'}]
            };
            $scope.videos.push(aux);
            localStorage.clear();
            sharedProperties.setProperties($scope.videos);
            localStorage.setItem("VIDEO",JSON.stringify($scope.videos));
            $scope.link = '';
        }
    };
}]);
