/*

This is a simple template for a jquery plugin.

Replace all instances of 'pluginname;' with your plugin name lowercased
Replace all instances of 'PluginName;' with your plugin name camelcased.

Call the plugin with $('jquery-selector').plugin({ foo:'custom-setting' });
*/

(function($) {
    var PluginName = function(el, opts) {
        //Defaults are below
        var settings = $.extend({}, $.fn.pluginname.defaults, opts);

        // private methods
        function init() {

        }
        init();
    };
    $.fn.pluginname = function(options) {
        return this.each(function(idx, el) {
            var $el = $(this), key = 'pluginname';
            // Return early if this element already has a plugin instance
            if ($el.data(key)) { return; }
            // Pass options to plugin constructor
            var pluginname = new PluginName(this, options);
            // Store plugin object in this element's data
            $el.data(key, pluginname);
        });
    };
    // default settings
    $.fn.pluginname.defaults = {  };
})(jQuery);
