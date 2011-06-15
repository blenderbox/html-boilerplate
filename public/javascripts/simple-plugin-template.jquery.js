/* 

	This is a simple template for a jquery plugin.

	Replace all instances of 'plugin;' with your plugin name 
	Replace all instances of 'Plugin;' with your plugin name 
	
	Call the plugin with $('jquery-selector').plugin({ foo:'custom-setting' });
*/

(function($) {
  var Plugin = function(el, opts) {
  
    //Defaults are below
    var settings = $.extend({}, $.fn.plugin.defaults, opts);
	
	// public methods
    this.foo = function() {
  	
    }
    // private methods
    function init() {
      
    }
	// call the init function
    init();
	
	// initialize the plugin using the jQuery plugin syntax
    $.fn.plugin = function(opts) {
      return this.each(function(idx, el) {
        var $el = $(this), key = 'plugin';
        // Return early if this element already has a plugin instance
        if ($el.data(key)) { return; }
        // Pass options to plugin constructor
        var plugin = new Plugin(this, opts);
        // Store plugin object in this element's data
        $el.data(key, plugin);
      });
    };
    // default settings
    $.fn.plugin.defaults = {
        foo:0
    };
})(jQuery);