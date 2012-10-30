# Boiling hot HTML Boilerplate
## Blenderbox Guidelines for HTML Templates

## INTRODUCTION

This document is a list of guidelines, tips, and examples for creating HTML, JavaScript and CSS for Blenderbox projects.  Where applicable, please follow these guidelines to create a clean, SEO friendly website that adheres to Blenderbox's best practices.

## 1.0    - HTML

•    Use the default package for directory structure and the base styles.
•    Do not use in-line JavaScript and never use in-line CSS.
•    Keep scripts at the bottom of the page and CSS links in the head of the page to help with page load performance.
•    Do not use tables when you can avoid it, and most likely, you can avoid it.
•    Only use ids when there is only one element on the page that needs style — otherwise use a class.
•    Make sure all images have an alt attribute.

## 1.1    - CSS NAMING CONVENTIONS

•    Do not make the CSS overly complicated, but rather let the styles cascade where reasonable and applicable while using as little mark up as necessary.
•    When starting a project, begin by styling the basic HTML elements.  If no design is provided for that, please confirm that it is not needed.
•    Organize the CSS into logical sections such as HTML, classes (site wide only), layout, promos, etc. as seen in the '/stylesheets/all.css' file. 
•    Make sure all links and buttons have a rollover state.  If you cannot find a rollover or on state in a PSD, please contact project management and let them know and they will provide you with one.
•    Use lowercase and dashes for  for ids and classes.

Example:

    #layout-container {  }
    .search-results {  }

## 2.0 - TIPS TO FOLLOW

Some of the common issues with browser compliance as well as the Blenderbox standards can be found below.

•    Use the line-height attribute when vertically aligning a single line of text or input field.  This is often helpful when styling footers etc.
•    Write the CSS with a hierarchical approach.  For instance, if the header element appears on the top of the page, put the header element at the top of the CSS file.  
•    All label tags attributes should be set to the value of the input field id so a user can click the label to select the field.  All fields should have a label if there is design for it.

•    CLEARING 
o    We have two options for clearing, first the clearfix class and second the clear class.  You can read more about the clearfix here http://www.webtoolkit.info/css-clearfix.html

The basic clearing class, .clearfix, uses the ‘:after’ pseudo-selector to add clearing after the tag you are floating.  To clear after a floated element, you can use clearfix.  

Examples of clearing after:

    <div class=”float clearfix”>Content that is floating</div>


If you need to use a block element to clear a float, please use a div with a non-breaking space.

Examples:

    <div class=”float-left-class”></div>
    <div class=”clear”>&nbsp;</div>


•    BUTTONS / IMAGE ROLLOVERS / IMAGES WITH TEXT
o    Use <button type="submit"></button> instead of input type="submit"
o    Do not use JavaScript to handle rollovers because it means browsers with JavaScript disabled will not see the correct styles for the site.  Instead, use CSS sprites, the technique outlined here - http://blog.blenderbox.com/2008/03/11/css-and-rollovers/.  Use the .ir class to apply image replacement styles to all image replacement.

For images with text like logos, follow the same principle to make the page more SEO Friendly.

•    IMAGES
o    Cut out as much white-space from an image as you can.  
o    Save .png files instead of .gif files when you can.  
o    Save .gif files when there are few colors or the image is a vector to optimize for performance and quality.
o    Save .jpg files at 'High' in the Save for Web settings when using Photoshop.  
o    All images should have alt tags describing the image and their height and width attributes should be set to aid with browser performance.


## 3.0 - Template Delivery

•    Please make sure the CSS and HTML on all pages validates.  You can use the Firefox web developer plug-in to test validation locally (Tools > Validate Local HTML and Tools > Validate Local CSS).
•    Test the files in IE7, IE8, Firefox, and Safari.  
•    Make sure there are no 404s before sending the final package.  This can most easily be accomplished by viewing the Net/Network tab in the Firebug extension or Webkit Developer Tools.


## 4.0 - The default file directory

    /images
        /buttons - All button images go here.
        /icons - All icons go here.
        /promos - All images for promos are here.
        bullet.gif - This is the image for use with unordered lists.
        logo.gif – The logo for the project

    /javascripts
        /app - All page specific Javascripts go here. 
            application.js - All application wide JavaScript goes here.  This is where you start the JavaScript development.
            css3.js – add css3 transitions here if they’re not supported by the browser

        /libs – A folder with libraries written by someone else. JQuery, belatedpng, modernizer, should be here.  
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
