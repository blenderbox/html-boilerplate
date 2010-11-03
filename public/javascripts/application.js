var APP = (function($) {
    var app = {};
    app.init = function() {
        $.ajaxSetup({
            cache: false,
            error: function(x, e) {
                if (console) {
                    console.log(x, e);
                }
            },
            type: "POST"
        });
    };
    return app;
} (jQuery));

$(function() {
    APP.init();
});