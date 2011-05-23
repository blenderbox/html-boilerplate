var APP = (function($) {
    var app = {};
    app.init = function() {
        $.ajaxSetup({
            cache: false,
            error: function(x, e) {
                if (console) { console.log(x, e); }
            },
            type: "POST"
        });
        if(!Modernizr.csstransitions) { $.getScript('javascripts/css3.js'); }
    };
    // Call the init function on load
    $(app.init);
    return app;
} (jQuery));
