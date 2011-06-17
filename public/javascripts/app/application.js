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