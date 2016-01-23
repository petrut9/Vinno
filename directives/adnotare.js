app.directive('adnotare', function ($compile) {
    var textTemplate = '<div class="annotation__element row">' +
        '<div class="col-md-1">' +
            '<div class="annotation__icon">' +
                '<span class="glyphicon glyphicon-font"></span>' +
            '</div>' +
        '</div>' +
        '<div class="col-md-11">' +
            '<div class="annotation__content">' +
                '<p>{{adnotare.timp}} -> {{adnotare.valoare}}</p>' +
            '</div>' +
        '</div>' +
    '</div>';
    var videoTemplate = '<div class="annotation__element row">' +
        '<div class="col-md-1">' +
            '<div class="annotation__icon">' +
                '<span class="glyphicon glyphicon-random"></span>' +
            '</div>' +
        '</div>' +
        '<div class="col-md-11">' +
            '<div class="annotation__content">' +
                '<article>Shared on <a href="{{adnotare.valoare}}" target="_blank">YouTube</a>.</article>' +
            '</div>' +
        '</div>' +
    '</div>';

    var getTemplate = function (adnotationType) {
        var template = '';
        switch (adnotationType) {
            case 'text':
                template = textTemplate;
                break;
            case 'video':
                template = videoTemplate;
                break;
        }
        return template;
    };

    var linker = function (scope, element, attrs) {
        element.html(getTemplate(scope.adnotare.tip));
        $compile(element.contents())(scope);
    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            adnotare: '='
        }
    };
});