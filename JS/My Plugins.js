// JavaScript Document

/* global $ */

$(function(){
	
	'use strict';
	
	// smooth scroll
	$('.about').click(function(){
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		} ,1400);
	});
	
	
	$('.contact').click(function(){
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		} ,1400);
	});
	
	$('.clients').click(function(){
		$('html, body').animate({
			scrollTop: $('#clients').offset().top
		} ,1400);
	});
	

});