/*

This is a simple template for a jquery plugin.

Replace all instances of 'pluginName;' with your plugin name

Call the plugin with $('jquery-selector').pluginName({ foo:'custom-setting' });
*/

(function($){
    $.pluginName = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("pluginName", base);
        
        function init(){
            base.options = $.extend({},$.pluginName.defaults, options);
            
            // Put your initialization code here
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        init();
    };

    // default settings
    $.pluginName.defaults = { };
    
    $.fn.pluginName = function(options){
        return this.each(function(){
            (new $.pluginName(this, options));
        });
    };
    
})(jQuery);
