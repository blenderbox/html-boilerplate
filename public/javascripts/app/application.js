// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

var APP = (function($) {
    var app = {}, $el;
    // Public functions
    app.init = function() {
        $('a[href=#]').attr('href', 'javascript:;');
        // Set up the global ajax
        $.ajaxSetup({ cache: false, error: function errorLog(x, e) { log(x, e); }, type: 'POST' });
        if (!Modernizr.csstransitions) { $.getScript('javascripts/app/css3.js'); }
        if (!Modernizr.input.placeholder) { placeholder(); }
    };
    // Private functions
    function placeholder() {
        $('input[placeholder!=""]').each(function(idx, el){
            $el = $(el);
            var d = $el.attr('placeholder');
            if (d===undefined) { return; }
            $el.focus(function onFocus() {
                if (this.value === d) { this.value = ''; }
            }).blur(function onBlur() {
                if ($.trim(this.value) === '') { this.value = d; }
            });
            $el.blur();
        });
    }
    // Call the init function on load
    $(app.init);
    return app;
} (jQuery));
