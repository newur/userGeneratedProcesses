function buildRadioButton(innerHtml) {
	var label = buildElementWithClass("label", "btn btn-info");
	var input = document.createElement("INPUT");
	input.setAttribute("type", "radio");
	input.setAttribute("name", "options");
	input.setAttribute("autocomplete", "off");
//	input.setAttribute("value", innerHtml);
	
	label.innerHTML = " " + innerHtml;
	label.appendChild(input);
	
	return label;
}

function buildRadioButtons(innerHtmls) {
	var div = buildElementWithClass("div", "btn-group");
	div.setAttribute("data-toggle", "buttons");
	for (var i = 0; i < innerHtmls.length; i++) {
		var radioButton = buildRadioButton(innerHtmls[i]);
		div.appendChild(radioButton);
	}
	div.children[0].className += " active";
	return div;
}

function buildReceiveFormGenericRow(label) {
	var formGroup = buildElementWithClass("div", "form-group");
	var labelEl = buildElementWithClass("label", "col-sm-2 control-label");
	labelEl.innerHTML = label;
	var colSm7 = buildElementWithClass("div", "col-sm-7");
	
	formGroup.appendChild(labelEl);
	formGroup.appendChild(colSm7);
	var buttons = buildRadioButtons(["Annehmen", "Weitergeben"]);
	formGroup.appendChild(buttons);

	return formGroup;
}

function buildReceiveFormRowWithDropdown(label, selectFields) {
	var btnGroup = buildInputGroupBtnDiv();
	var btn = buildButtonDropdownToggle("Auswahlmöglichkeiten anzeigen ");
	btn.setAttribute("class", "btn btn-default dropdown-toggle large");
	var list = buildDropDownMenuUl(selectFields);

	btnGroup.appendChild(btn);
	btnGroup.appendChild(list);

	var row = buildReceiveFormGenericRow(label);
	row.children[1].appendChild(btnGroup);

	getEl("receiveForm").appendChild(row);
	dropDownSelection();
}

function buildReceiveFormRowWithInput(label, placeholder) {
	var input = buildDisabledInputWithPlaceholder("Beispiel: " + placeholder);
	var row = buildReceiveFormGenericRow(label);
	row.children[1].appendChild(input);

	getEl("receiveForm").appendChild(row);
}

function buildDisabledInputWithPlaceholder(placeholder) {
	var input = buildElementWithClass("input", "form-control");
	input.setAttribute("placeholder", placeholder);
	input.setAttribute("disabled", "");
	return input;
}

function buildButton(innerHtml) {
	var button = buildElementWithClass("button", "btn btn-default");
	button.innerHTML = innerHtml;
	button.setAttribute("type", "submit");
	return button;
}

function buildElementWithClass(element, value) {
	var div = document.createElement(element.toUpperCase());
	div.setAttribute("class", value);

	return div;
}

function buildInputGroupDiv() {
	return buildElementWithClass("div", "input-group");
}

function buildInputGroupAddonSpan() {
	var span = buildElementWithClass("span", "input-group-addon");
	span.innerHTML = "Feldname";

	return span;
}

function buildFormControlInput() {
	var input = document.createElement("INPUT");
	input.setAttribute("id", "field-" + getChildren("fields").length);
	input.setAttribute("type", "text");
	input.setAttribute("class", "form-control");
	input.setAttribute("placeholder", "z.B. " + randomPlaceholder());
	input.setAttribute("aria-describedby", "basic-addon1");
//	getChildren

	return input;
}

function buildInputGroupBtnDiv() {
	return buildElementWithClass("dev", "input-group-btn");
}

function buildButtonDropdownToggle(innerHtml) {
	var button = document.createElement("BUTTON");
	button.setAttribute("type", "button");
	button.setAttribute("class", "btn btn-default dropdown-toggle");
	button.setAttribute("data-toggle", "dropdown");
	button.setAttribute("aria-haspopup", "true");
	button.setAttribute("aria-expanded", "false");
	button.innerHTML = innerHtml;

	var span = document.createElement("SPAN");
	span.setAttribute("class", "caret");

	button.appendChild(span);

	return button;
}

function buildDropDownMenuUl(array) {
	var ul = buildElementWithClass("ul", "dropdown-menu");

	for (var i = 0; i < array.length; i++) {
		if (array[i] === "-SEP-") {
			appendListElement(buildListElementSeparatorLi, ul, undefined);
		} else {
			appendListElement(buildListElementLi, ul, array[i]);
		}
	}
	return ul;
}

function buildListElementLi(innerHtml) {
	var li = document.createElement("LI");

	li.appendChild(buildDropdownLink(innerHtml));

	return li;
}

function buildListElementLiWithLink(innerHtml, href) {
	var li = document.createElement("LI");
	var a = document.createElement("A");
	
	a.setAttribute("href", href);
	a.innerHTML = innerHtml;
	li.appendChild(a);

	return li;
}

function buildDropdownLink(innerHtml) {
	var a = document.createElement("A");

	a.setAttribute("href", "#");
	a.innerHTML = innerHtml;

	return a;
}

function buildListElementSeparatorLi() {
	var li = document.createElement("LI");
	li.setAttribute("role", "separator");
	li.setAttribute("class", "divider");

	return li;
}

function buildField() {
	var div = buildInputGroupDiv();
	var span = buildInputGroupAddonSpan();
	var input = buildFormControlInput();

	var btnGroup = buildInputGroupBtnDiv();
	var btn = buildButtonDropdownToggle("Feldtyp");
	var list = buildDropDownMenuUl(["Text", "Datum", "Ganzzahl", "Liste", "-SEP-", "Datei (PDF, Bild usw."]);

	btnGroup.appendChild(btn);
	btnGroup.appendChild(list);

	div.appendChild(span);
	div.appendChild(input);
	div.appendChild(btnGroup);

	return div;
}
