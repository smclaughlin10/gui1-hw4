/* File: slider.js
GUI Assignment: HW4 - Using the jQuery Plugin/UI with Your Dynamic Table
Sean Mclaughlin, UMass Lowell Computer Science,
Sean_Mclaughlin1@student.uml.edu
Copyright (c) 2023 by Sean. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by SM on December 4, 2023 */

$(document).ready(function() {
	// Minimum Column Value Slider
	$("#shSlider").slider({
		min: -50,
		max: 49,
		slide: function(event, ui) {
			$("#startHorizontal").val(ui.value);
			$("#tableForm").validate();
			formSubmit();
		}
	});
	// Updates form input using slider value
	$("#startHorizontal").change(function() {
		$("#shSlider").slider("value", $(this).val());
		$("#tableForm").validate();
		formSubmit();
	})

	// Maximum Column Value Slider
	$("#ehSlider").slider({
		min: -49,
		max: 50,
		slide: function(event, ui) {
			$("#endHorizontal").val(ui.value);
			$("#tableForm").validate();
			formSubmit();
		}
	});
	// Updates form input using slider value
	$("#endHorizontal").change(function() {
		$("#ehSlider").slider("value", $(this).val());
		$("#tableForm").validate();
		formSubmit();
	})

	// Minimum Row Value Slider
	$("#svSlider").slider({
		min: -50,
		max: 49,
		slide: function(event, ui) {
			$("#startVertical").val(ui.value);
			$("#tableForm").validate();
			formSubmit();
		}
	});
	// Updates form input using slider value
	$("#startVertical").change(function() {
		$("#svSlider").slider("value", $(this).val());
		$("#tableForm").validate();
		formSubmit();
	})

	// Maximum Row Value Slider
	$("#evSlider").slider({
		min: -49,
		max: 50,
		slide: function(event, ui) {
			$("#endVertical").val(ui.value);
			$("#tableForm").validate();
			formSubmit();
		}
	});
	// Updates form input using slider value
	$("#endVertical").change(function() {
		$("#evSlider").slider("value", $(this).val());
		$("#tableForm").validate();
		formSubmit();
	})
});
