/* File: tabs.js
GUI Assignment: HW4 - Using the jQuery Plugin/UI with Your Dynamic Table
Sean Mclaughlin, UMass Lowell Computer Science,
Sean_Mclaughlin1@student.uml.edu
Copyright (c) 2023 by Sean. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by SM on December 4, 2023 */

$(document).ready(function() {
	$("#tabs").tabs();

	// Save table button event listener
	const saveTable = document.getElementById("saveTable");
    saveTable.addEventListener('click', function(e) {
		e.preventDefault();
		const shVal = Number($("#startHorizontal").val());
		const ehVal = Number($("#endHorizontal").val());
		const svVal = Number($("#startVertical").val());
		const evVal = Number($("#endVertical").val());

		const tabIndex = $("#something").tabs("option", "active");
		createTab(shVal, ehVal, svVal, evVal);

		$("#tabs").tabs("option", "active", tabIndex);
	});

	// Remove all tabs event listener
	const removeAll = document.getElementById("removeAllTabs");
    removeAll.addEventListener('click', removeAllTabs);

	// When x button is clicked on tab, delete the corresponding tab
	$("#tabs").on("click", ".xOutTab", function() {
		let id = $(this).parent().attr("aria-controls");
		$(this).parent().remove();
		removeTab(id);
	})
});

// Creates a new tab in jquery tab area
function createTab(startH, endH, startV, endV) {
	const tabName = "tab-" + startH + "-" + endH + "-" + startV + "-" + endV;

	const curTab = $(`#tabs a:contains("${tabName}")`);
	if (curTab.length) {
		$("#tabs").tabs("option", "active", curTab.parent().index());
	} else {
		const tabNum = tabName;
		const newTable = makeTable(startH, endH, startV, endV);

		const newTab = $(`<div id="${tabNum}" class="tabbedTable scrollable-tab-content">${newTable}</div>`);
		const newTabTitle = $(`<li class="tabTitle"><a href="#${tabNum}">${tabName}</a></li>`);
		const remBtn = $('<span class="xOutTab ui-icon ui-icon-close delete-tab-button" role="presentation">Remove Tab</span>');

		remBtn.appendTo(newTabTitle);
		newTabTitle.appendTo("#tabs ul");
		newTab.appendTo("#tabs");

		$("#tabs").tabs("refresh");
		$("#tabs").tabs("option", "active", -1);
	}
}

// Removes all tabs in tabbed area
function removeAllTabs() {
	$("#tabs ul li").remove();
	$("#tabs div").remove();
	$("#tabs").tabs("refresh")
}

// Remove the table in tab area given it's ID
function removeTab(id) {
	$("#" + id).remove();
	$("#tabs").tabs("refresh");
}