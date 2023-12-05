/* File: style.css
GUI Assignment: HW4 - Using the jQuery Plugin/UI with Your Dynamic Table
Sean Mclaughlin, UMass Lowell Computer Science,
Sean_Mclaughlin1@student.uml.edu
Copyright (c) 2023 by Sean. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by SM on November 12, 2023 */

$(document).ready(function() {
	/* Form Validation - adds error message when given bad input */
	$("#tableForm").validate({
		rules: {
			startHorizontal: {
				required: true,
				min: -50,
				max: 49,
			},
			endHorizontal: {
				required: true,
				min: -49,
				max: 50,
				greaterThan: "#startHorizontal"
			},
			startVertical: {
				required: true,
				min: -50,
				max: 49,
			},
			endVertical: {
				required: true,
				min: -49,
				max: 50,
				greaterThan: "#startVertical"
			}
		},
		/* Error Messages */
		messages: {
			startHorizontal: {
				required: "Please enter a value",
				min: "Please enter a larger start value",
				max: "Please enter a smaller start value",
			},
			endHorizontal: {
				required: "Please enter a value",
				min: "Please enter a larger end value",
				max: "Please enter a smaller end value",
				greaterThan: "Please enter a value less than the Min Column Value"
			},
			startVertical: {
				required: "Please enter a value",
				min: "Please enter a larger start value",
				max: "Please enter a smaller start value",
			},
			endVertical: {
				required: "Please enter a value",
				min: "Please enter a larger end value",
				max: "Please enter a smaller end value",
				greaterThan: "Please enter a value less than the Min Row Value"
			}
		}
	});
	// Event listener for the submit button
	const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener('click', formSubmit);
});

/* Greater than function for validation */
$.validator.addMethod("greaterThan", function(value, element, param){
	let target = $(param);
 	if (this.settings.onfocusout && target.not(".validate-greaterThan-blur").length) {
        target.addClass("validate-greaterThan-blur").on("blur.validate-greaterThan", function(){
            $(element).valid();
        });
    }

	let referenceValue = target.val();
        if ($.isNumeric(value) && $.isNumeric(referenceValue)) {
            value = parseInt(value);
            referenceValue = parseInt(referenceValue);
            return value > referenceValue;
        }

	return value > target.val();
}, "Please enter a greater value than the start value." );


function formSubmit() {
	if ($("#tableForm").valid()) {
		let mainTable = document.getElementById("myTable");

		// Gathering all form values inputted
		let startHorizontal = document.getElementById("startHorizontal");
		let endHorizontal = document.getElementById("endHorizontal");
		let startVertical = document.getElementById("startVertical");
		let endVertical = document.getElementById("endVertical");
		
		let startHVal = startHorizontal.value;
		let endHVal = endHorizontal.value;
		let startVVal = startVertical.value;
		let endVVal = endVertical.value;

		startHVal = Number(startHVal);
		endHVal = Number(endHVal);
		startVVal = Number(startVVal);
		endVVal = Number(endVVal);

		// Make table
		mainTable.innerHTML = makeTable(startHVal, endHVal, startVVal, endVVal);
	}
}

function makeTable(startH, endH, startV, endV) {
	// Make the table
	let table = '<table>'
	table += '<tr>';
	table += '<td></td>';
	let i;
	// Make all the rows
	for (i = startH; i <= endH; i++) {
		table += '<th>' + i + '</th>'
	}
	table += '</tr>';
	// Make all the columns 
	for (let k = startV; k <= endV; k++) {
		table += '<tr>';
		table += '<th>' + k + '</th>';
		for (let j = startH; j <= endH; j++) {
			table += '<td>' + (k*j) + '</td>';
		}
		table += '</tr>';
	}
	table += '</table>'
	// Returning entire "table" string to formSubmit function
	return table;
}

// Resets styling of form when form is submitted again.
function formStyleReset(table, inputForm, msgs) {
	table.innerHTML = "";
	for (let i = 0; i < 4; i++) {
		inputForm[i].style.borderColor = "black";
		msgs[i].style.display = "none";
		msgs[i].innerHTML = "";
	}
	return;
}