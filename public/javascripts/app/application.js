
var APP = (function($, undefined) {
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
    $.ajaxSetup({
      cache: false,
      error: function errorLog(x, e) {
        if (typeof log !== 'undefined') {
          log(x, e);
        }
      },
      type: 'POST'
    });

    if (!Modernizr.input.placeholder) {
      placeholder();
    }

    /*
    Yepnope is available through Modernizr.

    Yepnope example usage:

    yepnope([{
      test:Modernizr.csstransitions,
      nope:'/javascripts/app/css3.js'
    }]);
    */
  }

  // Open all links to external resources in a new window.
  function open(e) {
    var href = this.getAttribute('href');
    // If we're linking to a different domain, stop the normal behavior and open in a new window.
    if (window.location.host !== href.split('/')[2]) {
      e.preventDefault();
      window.open(href);
    }
  }

  // If the browser does not support the placeholder attribute, add it on focus.
  function placeholder() {
    var attr = 'placeholder';
    $('input[' + attr + '!=""]').each(function(idx, el){
      $el = $(el);
      var d = $el.attr(attr);
      if (d === undefined || $el.attr('type') === 'password') { return; }
      $el
        .focus(function onFocus() {
          $(this).removeClass(attr);
          if (this.value === d) {
            this.value = '';
          }
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
