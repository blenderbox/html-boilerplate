# Boiling hot HTML Boilerplate
## Blenderbox Guidelines for HTML, CSS, and JavaScript

## INTRODUCTION

This document is a list of guidelines, tips, and examples for creating HTML, JavaScript and CSS for Blenderbox projects.  Where applicable, please follow these guidelines to create a clean, SEO friendly website that adheres to Blenderbox's best practices.

## 1.0    - HTML

*    Use the default package for directory structure and the base styles.
*    Do not use in-line JavaScript and never use in-line CSS.
*    Keep scripts at the bottom of the page and CSS links in the head of the page to help with page load performance.
*    Do not use tables when you can avoid it, and most likely, you can avoid it.
*    Only use ids when there is only one element on the page that needs style — otherwise use a class.
*    Make sure all images have an alt attribute.

## 1.1    - CSS

*    Do not make the CSS overly complicated, but rather let the styles cascade where reasonable and applicable while using as little mark up as necessary.
*    When starting a project, begin by styling the basic HTML elements.  If no design is provided for that, please confirm that it is not needed.
*    Make sure all links and buttons have a rollover state.  If you cannot find a rollover or on state in a PSD, please contact project management and let them know and they will provide you with one.
*    Don't use ID's #hotdrama - Id selectors have priority over other kinds of selectors. This can make it harder to add new rules using less specific selectors, leading to specificity wars: http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html
*    Be consistent with indentation
*    Be consistent about where spaces before/after colons/braces go
*    One selector per line, One rule per line
*    Use lowercase and dashes for classes.

Example:

    .search-results {  }

## 1.2  - CSS EXTENSIONS (Sass/Less) Style Guide

*    List @extend(s) First - Knowing right off the bat that this class inherits another whole set of rules from elsewhere is good.
*    List "Regular" Styles Next
*    List @include(s) Next - This visually separates the @extends and @includes as well as groups the @includes for easier reading. You might also want to make the call on separating user-authored @includes and vendor-provided @includes.
*    Nested Selectors Last

Example:

    .weather {
      @extends %module;
      background: LightCyan;
      @include transition(all 0.3s ease);

      > h3 {
        border-bottom: 1px solid white;
        @include transform(rotate(90deg));
      }
    }

*    All Vendor Prefixes Use @mixins
*    Maximum Nesting: Three Levels Deep - Chances are, if you're deeper than that, you're writing a crappy selector. Crappy in that it's too reliant on HTML structure (fragile), overly specific (too powerful), and not very reusable (not useful). It's also on the edge of being difficult to understand.

Example:

    .weather {

      .cities {

        li {
          // no more!
        }
      }
    }


*    Partials are named _partial.scss
*    Variablize All Common Numbers, and Numbers with Meaning
*    Variablize All Colors



## 2.0 - TIPS TO FOLLOW

Some of the common issues with browser compliance as well as the Blenderbox standards can be found below.

*    Use the line-height attribute when vertically aligning a single line of text or input field.  This is often helpful when styling footers etc.
*    Write the CSS with a hierarchical approach.  For instance, if the header element appears on the top of the page, put the header element at the top of the CSS file.
*    All label tags attributes should be set to the value of the input field id so a user can click the label to select the field.  All fields should have a label if there is design for it.


CLEARING

We have two options for clearing, first the clearfix class and second the clear class.  You can read more about the clearfix here http://www.webtoolkit.info/css-clearfix.html The basic clearing class, .clearfix, uses the ‘:after’ pseudo-selector to add clearing after the tag you are floating.  To clear after a floated element, you can use clearfix.  

Examples of clearing after:

    <div class=”float clearfix”>Content that is floating</div>


If you need to use a block element to clear a float, please use a div with a non-breaking space.

Examples:

    <div class=”float-left-class”></div>
    <div class=”clear”>&nbsp;</div>


BUTTONS / IMAGE ROLLOVERS / IMAGES WITH TEXT

*    Use <button type="submit"></button> instead of input type="submit"

For images with text like logos, follow the same principle to make the page more SEO Friendly.

IMAGES

*    Cut out as much white-space from an image as you can.
*    Save .png files instead of .gif files when you can.
*    Save .gif files when there are few colors or the image is a vector to optimize for performance and quality.
*    Save .jpg files at 'High' in the Save for Web settings when using Photoshop.
*    All images should have alt tags describing the image and their height and width attributes should be set to aid with browser performance.


## 3.0 - Template Delivery

*    Please make sure the CSS and HTML on all pages validates.  You can use the HTML5 validator to address any issues http://html5.validator.nu/
*    Test the files in IE8+, Firefox, Chrome, and Safari.


## 4.0 - The default file directory

    /images
        logo.gif – The logo for the project

    /javascripts
        /app - All page specific Javascripts go here.
            application.js - All application wide JavaScript goes here.  This is where you start the JavaScript development.
            css3.js – add css3 transitions here if they’re not supported by the browser

        /libs – A folder with libraries written by someone else. jQuery, belatedpng, modernizer, should be here.
            If you add new libraries, place them here.
            jquery-{version}.min.js – the jQuery library.
            log.js - Add logging support to browsers without console.log
            modernizr-{version}.min.js – A JavaScript library for HTML5 tests. http://www.modernizr.com/ This should be included in the Head of your page to add HTML5 elements to IE.  Review the file to see what tests are available and visit the website if you need to add more tests.
            request_interval.js - a shim for request animation support.

        plugin-template.jquery.js – A template for creating a jQuery plugin.
        simple-plugin-template.jquery.js – A simpler jQuery plugin template.

    /stylesheets
        all.css

    index.html - A basic file for starting the site with most relevant HTML elements for style.
    humans.txt – Read more: http://goo.gl/IjffW
    robots.txt – Read more: http://goo.gl/JzIqS

## 5.0 - IE Targeted Styles

If you want to style for IE specifically, use the following classes that are added to the HTML node via conditional statements and Modernizr.

IE7 - lt-ie8
IE8 - lt-ie9

    .lt-ie8 body { background:lime; }
    .lt-ie9 body { background:pink; }


To target browsers that do not have JavaScript support, use the no-js class.

    .no-js body { background:light-blue; }
