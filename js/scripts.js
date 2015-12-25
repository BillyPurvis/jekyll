/*jslint browser: true*/
/*global $, jQuery*/

$(function () {
    'use strict';
    // DOM Ready
    
    $('a[href*=#]').on('click', function(e){
	e.preventDefault();
  $('html, body').animate({
  	scrollTop: $(this.hash).offset().top}, 1000);
});

    
}); // DOM Ready End