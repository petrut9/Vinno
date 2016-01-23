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
                adnotari: []
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
    };
    var blob = new Blob([JSON.stringify($scope.videos)], { type: 'text/json' });
    $scope.url = (window.URL || window.webkitURL).createObjectURL(blob);

    $scope.add = function () {
        console.log('am ajuns aici1');
        var f = document.getElementById('file').files[0],
            r = new FileReader();
        r.onloadend = function (e) {
            var temp = JSON.parse(e.target.result);
            console.log('am ajuns aici');
            for (var i = 0; i < temp.length; i++) {
                $scope.videos.push(temp[i]);
            }
            /* localStorage.clear();
                localStorage.setItem("VIDEO", JSON.stringify($scope.videos));*/
        }
        r.readAsBinaryString(f);
    }
}]);
