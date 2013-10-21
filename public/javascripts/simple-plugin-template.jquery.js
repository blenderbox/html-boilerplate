/*

This is a simple template for a jquery plugin.

Replace all instances of 'pluginName;' with your plugin name

Call the plugin with $('jquery-selector').pluginName({ foo:'custom-setting' });
*/

;(function($, undefined){
    $.pluginName = function(el, $el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $el;
        base.el = el;

        function init(){
            base.options = $.extend({},$.pluginName.defaults, options);

            // Put your initialization code here
        }

        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        //
        // };

        // Run initializer
        init();
    };

    // default settings
    $.pluginName.defaults = { };

    // our jQuery plugin magic.
    $.fn.pluginName = function(options){

        return this.each(function(idx, el) {
            var $el = $(el),
                key = 'pluginName';

            // Only create the plugin instance if it doesn't exist
            if (!$el.data(key)) {
                // Store plugin object in this element's data
                $el.data(key, new $.pluginName(el, $el, options));
            }

        });

    };

})(jQuery);
