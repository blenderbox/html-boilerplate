/*
Call the plugin with $('jquery-selector').newWindowMessaging({ });
*/

;(function($, undefined){
  $.newWindowMessaging = function(el, $el, options){

    var _this = this;

    _this.$el = $el;

    function init(){
      _this.options = $.extend({}, $.newWindowMessaging.defaults, options);
      _this.isPopup = _this.options.popup;
      _this.windowType = _this.isPopup ? 'popup' : 'new';
      addMessaging();
    }

    function addMessaging() {
      if (_this.$el.attr('aria-label')) {
        // There's already an aria-label, don't replace it
        return;
      }

      var text = _this.$el.text().trim() || _this.$el.attr('title') || 'Untitled link';
      var message = text + ' (Opens in a ' + _this.windowType + ' window)';

      _this.$el.attr('aria-label', message);
    }

    // Run initializer
    init();
  };

  $.newWindowMessaging.defaults = {
    popup: false,
  };

  $.fn.newWindowMessaging = function(options){

    return this.each(function(idx, el) {
      var $el = $(el),
          key = 'newWindowMessaging';

      if (!$el.data(key)) {
        $el.data(key, new $.newWindowMessaging(el, $el, options));
      }

    });

  };

})(jQuery);
