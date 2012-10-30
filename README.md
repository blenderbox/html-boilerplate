# Boiling hot HTML Boilerplate
## Blenderbox Guidelines for HTML Templates

INTRODUCTION

This document is a list of guidelines, tips, and examples for creating HTML, JavaScript and CSS for Blenderbox projects.  Where applicable, please follow these guidelines to create a clean, SEO friendly website that adheres to Blenderbox's best practices.

1.0	- HTML

•	Use the default package for directory structure and the base styles.
•	Do not use in-line JavaScript and never use in-line CSS.
•	Keep scripts at the bottom of the page and CSS links in the head of the page to help with page load performance.
•	Do not use tables when you can avoid it, and most likely, you can avoid it.
•	Only use ids when there is only one element on the page that needs style — otherwise use a class.
•	Make sure all images have an alt attribute.

1.1	- CSS NAMING CONVENTIONS

•	Do not make the CSS overly complicated, but rather let the styles cascade where reasonable and applicable while using as little mark up as necessary.
•	When starting a project, begin by styling the basic HTML elements.  If no design is provided for that, please confirm that it is not needed.
•	Organize the CSS into logical sections such as HTML, classes (site wide only), layout, promos, etc. as seen in the '/stylesheets/all.css' file. 
•	Make sure all links and buttons have a rollover state.  If you cannot find a rollover or on state in a PSD, please contact project management and let them know and they will provide you with one.
•	Use lowercase and dashes for  for ids and classes.

Example: #layout-container {  } and .search-results {  }

2.0 - TIPS TO FOLLOW

Some of the common issues with browser compliance as well as the Blenderbox standards can be found below.

•	Use the line-height attribute when vertically aligning a single line of text or input field.  This is often helpful when styling footers etc.
•	Write the CSS with a hierarchical approach.  For instance, if the header element appears on the top of the page, put the header element at the top of the CSS file.  
•	All label tags attributes should be set to the value of the input field id so a user can click the label to select the field.  All fields should have a label if there is design for it.

•	CLEARING 
o	We have two options for clearing, first the clearfix classes and second the clear classes.  You can read more about the clearfix here http://www.webtoolkit.info/css-clearfix.html

The basic clearing classes are .clearfix, .clearfix-left, and .clearfix-right. These classes use the ‘:after’ pseudo-selector to add clearing after the tag you are floating.  To clear after a floated element, you can use clearfix.  

Examples of clearing after:

<div class=”float clearfix”>Content that is floating</div>

<div class=”float-left clearfix-left”>Content that is floating left</div>

<div class=”float-right clearfix-right”>Content that is floating right</div>


If you need to use a block element to clear a float, please use a div with a non-breaking space.

Examples:

<div class=”float-left-class”></div>
<div class=”clear”>&nbsp;</div>


•	BUTTONS / IMAGE ROLLOVERS / IMAGES WITH TEXT
o	Do not use JavaScript to handle rollovers of buttons, navigation elements, etc. because it means browsers with JavaScript disabled will not see the correct styles for the site.  Instead, use CSS sprites, the technique outlined here - http://blog.blenderbox.com/2008/03/11/css-and-rollovers/.  The package already has an example of how to handle navigation buttons that use images.  Two things to note that are not included in the post are one, you should always put the text from the image in the link, and two, use ‘text-indent:-2000px;’ to make the text is invisible to the user but visible to search engines and screen readers.  This is a best for SEO and 508 compliance and is included in the default package.

For images with text like logos, follow the same principle to make the page more SEO Friendly.
•	IMAGES
o	Cut out as much white-space from an image as you can.  
o	Save .png files instead of .gif files when you can.  If you do use .png files, make sure to account for the fact that IE 6 cannot natively display .png files.  Look into pngfix.js and make sure to apply it to the CSS as well as inline images.
o	Save .gif files when there are few colors or the image is a vector to optimize for performance and quality.
o	Save .jpg files at 'High' in the Save for Web settings when using Photoshop.  
o	All images should have alt tags describing the image and their height and width attributes should be set to aid with browser performance.

3.0 - DELIVERING TEMPLATES

•	Please make sure the CSS and HTML on all pages validates.  You can use the Firefox web developer plug-in to test validation locally (Tools > Validate Local HTML and Tools > Validate Local CSS).
•	Test the files in IE6, IE7, IE8, Firefox, and Safari.  Our requirements for IE6 are that it displays, but it does not have to be pixel perfect.
•	Make sure there are no 404s before sending the final package.  This can most easily be accomplished by viewing the Net/Network tab in the Firebug extension or Webkit Developer Tools.


4.0 - THE DEFAULT PACKAGE FILE DIRECTORY

/images
/backgrounds - All backgrounds go here.
/buttons - All button images go here.
/icons - All icons go here.
/promos - All images for promos are here.
bullet.gif - This is the image for use with unordered lists.
logo.gif – The logo for the project

/javascripts
/app - All page specific Javascripts go here. 
application.js - All application wide JavaScript goes here.  This is where you start the JavaScript development.  There is a function for logging JavaScript that can be called with the following:
log('inside coolFunc', this, arguments);

	css3.js – add css3 transitions here if they’re not supported by the browser

/libs – A folder with libraries written by someone else. JQuery, belatedpng, modernizer, should be here.  
If you add new libraries, place them here.
jquery-1.6.1.min.js – the jQuery library.
modernizr.min.js – A JavaScript library for HTML5 tests. http://www.modernizr.com/ This should be included in the Head of your page to add HTML5 elements to IE.  Review the file to see what tests are available and visit the website if you need to add more tests.
plugin-template.jquery.js – A template for creating a jQuery plugin.

simple-plugin-template.jquery.js – A simpler jQuery plugin template.

/stylesheets
	960-12.css – If we’re using the 12 column 960 grid, copy the file into all.css
	960-16.css – If we’re using the 16 column 960 grid, copy the file into all.css
all.css

index.html - A basic file for starting the site with most relevant HTML elements for style.
humans.txt – Read more: http://goo.gl/IjffW 
robots.txt – Read more: http://goo.gl/JzIqS 

5.0 - IE SPECIFIC STYLES
If you want to style for IE specifically, you can use the following classes that get added to the HTML node via conditional statements and Modernizr.

IE6 - ie6 oldie Example: .ie6 {}
IE7 - ie7 oldie Example: .ie7 {}
IE8 - ie8 oldie Example: .ie8 {}

For browsers that do not have JavaScript support, you can use the no-js class. 
