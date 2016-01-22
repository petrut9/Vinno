var app = angular.module('myApp', ['ngRoute']);
app.constant('YT_event', {
    STOP: 0,
    PLAY: 1,
    PAUSE: 2,
    STATUS_CHANGE: 3,
    DESTROY: 4
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/videos/:id',{
            controller: 'VideoController',
            templateUrl: 'views/video.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
/*app.factory('templates', function () {
    return {
        text: 'templates/textTemplate.html',
        video: 'templates/videoTemplate.html'
    }
});*/

