var APP = (function($) {
    var app = {};
    // Public functions
    app.init = function() {
        $.ajaxSetup({
            cache: false,
            error: function(x, e) {
                if (console) { console.log(x, e); }
            },
            type: "POST"
        });
		// The following is an example of using Modernizer to detect browser capabilities.
		// You can remove it.
        // See if we have CSS3 transitions, otherwise add a shim for it.
        if (!Modernizr.csstransitions) { $.getScript('javascripts/behaviors/css3.js'); }
    };
    // Private functions
    function foo() {
        
    }
    // Call the init function on load
    $(app.init);
    return app;
} (jQuery));