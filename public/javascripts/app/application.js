var APP = (function($, undefined) {
  'use strict';

  var app = {},
      $el;

  /**
  * Initialize the basic app settings.
  **/
  function init() {
    cleanupLinks();
    forms();
    plugins();
    polyfill();
    initAjax();
  }

  /*
  * Set up the global ajax to be uncached and log errors
  */
  function initAjax() {
    $.ajaxSetup({
      cache: false,
      error: function errorLog(x, e) {
        console.log(x, e);
      }
    });
  }

  /**
  * Fix links with hashes and open new links in another tab/window
  **/
  function cleanupLinks() {
    $('a[href="#"]').attr('href', 'javascript:;');
    // Open links starting with "http(s)://" in a new window unless they're targeted at this host.
    $("a[href^=http]").click(open);
  }

  /*
  * Initialize the forms
  */
  function forms() {
    // Uncomment if you would like to auto-disable the form submit buttons.
    // $('form').on('submit', onFormSubmit);
  }

  /*
  * Disable the submit button on form submit.
  * TODO: Make this re-enable buttons on form submission error.
  */
  function onFormSubmit(e) {
    $(e.currentTarget)
      .find('button').each(function(idx, el){
        var $this = $(el),
            disableText = $this.data('disable-with');
        $this.attr('disabled', 'disabled');

        if (disableText !== undefined) {
          $this.text($this.data('disable-with'));
        }
      });
  }

  /*
  * Open all links to external resources in a new window.
  * @param {Object} event - the click event
  */
  function open(event) {
    var href = this.getAttribute('href');
    // If we're linking to a different domain, stop the normal behavior and open in a new window.
    if (window.location.host !== href.split('/')[2]) {
      event.preventDefault();
      var newWindow = window.open(href);
      newWindow.opener = null;
    }
  }

  /*
  * If the browser does not support the placeholder attribute, add it on focus.
  */
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
        })
        .blur();
    });
  }

  /*
  * Initialize any plugins
  */
  function plugins() {}

  /*
  * Initialize any polyfills
  */
  function polyfill() {
    if (!Modernizr.input.placeholder) {
      placeholder();
    }
  }

  // Call the init function on load
  $(init);

  return app;
} (jQuery));
