//= require ../libs/log

var APP = (function($) {
    'use strict';

    var app = {},
        $el;

    // public functions
    // app.foo = function() {  };

    // private functions
    function init() {
        $('a[href=#]').attr('href', 'javascript:;');

        // Open links starting with "http(s)://" in a new window unless they're targeted at this host.
        $("a[href^=http]").click(open);

        // Set up the global ajax
        $.ajaxSetup({ cache: false, error: function errorLog(x, e) { log(x, e); }, type: 'POST' });

        if (!Modernizr.input.placeholder) { placeholder(); }

        /*
        yepnope([{
            test:Modernizr.csstransitions,
            nope:'/javascripts/app/css3.js'
        }]);
        */
    }
    function open(e) {
        e.preventDefault();
        var href = this.getAttribute("href");
        if (window.location.host !== href.split('/')[2]) {
            window.open(href);
        } else {
            window.location = href;
        }
    }
    function placeholder() {
        var attr = 'placeholder';
        $('input[' + attr + '!=""]').each(function(idx, el){
            $el = $(el);
            var d = $el.attr(attr);
            if (d === undefined || $el.attr('type') === 'password') { return; }
            $el
                .focus(function onFocus() {
                    $(this).removeClass(attr);
                    if (this.value === d) { this.value = ''; }
                })
                .blur(function onBlur() {
                    if ($.trim(this.value) === '') {
                        $(this).addClass(attr);
                        this.value = d;
                    }
                }).blur();
        });
    }
    // Call the init function on load
    $(init);
    return app;
} (jQuery));
