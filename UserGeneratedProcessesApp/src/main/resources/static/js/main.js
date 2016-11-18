console.log("I am ready!");

function init() {
	addClickEvent("addFieldBtn", addField);
	addClickEvent("addProvideFieldBtn", addProvideField);
	addClickEvent("requestBtnSubmit", submitRequest);

	setFieldPlaceholder(addField(), "z.B. Vorname");
	setFieldPlaceholder(addField(), "z.B. Nachname");
}

function setFieldPlaceholder(field, placeholder) {
	$(field).children("input").attr("placeholder", placeholder);
}

function addFieldTo(appendFieldTo) {
	var field = buildField();
	fields = getEl(appendFieldTo);
	fields.appendChild(field);
	dropDownSelection();
	return field;
}

function isProvidePartVisible() {
	var style = window.getComputedStyle(getEl("provideFields"));
	var display = style.getPropertyValue("display");
	if (display == "block") {
		return true;
	}
	return false;
}

function addProvideField() {
	if (isProvidePartVisible()) {
		addFieldTo("provideFields");
	} else {
		showProvidePart();
	}
}

function addField() {
	return addFieldTo("fields");
}

function showProvidePart() {
	var hiddenElements = ["provideFields", "provideTo"];

	for (var i = 0; i < hiddenElements.length; i++) {
		getEl(hiddenElements[i]).style.display = "block";
	}
}

function dropDownSelection() {
	$(".dropdown-menu li a").click(function (e) {
		var dropDown = $(e.target).parent().parent().siblings();
		dropDown.text(e.target.innerHTML);
	});
}

init();
