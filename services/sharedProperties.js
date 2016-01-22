app.service('sharedProperties', function () {
    var shared;
    return {
        setProperties: function (value) {
            shared = value;
        },
        getProperties: function () {
            return shared;
        },
        empty: function () {
            shared = null;
        }
    }
});