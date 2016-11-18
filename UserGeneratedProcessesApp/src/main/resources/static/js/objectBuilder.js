function getFieldType(field) {
	return $(field).find("button").text();
}

function parseHtmlFieldsToObjects(fields) {
	var fieldObjects = [];

	for (var i = 0; i < fields.length; i++) {
		fieldObjects.push(parseHtmlFieldToObject(fields[i]));
	}

	return fieldObjects;
}

function parseHtmlFieldToObject(field) {
	var fieldValue = field.children[1].value;
	var fieldId = field.children[1].getAttribute("id");
	var fieldType = getFieldType(field);

	return fieldObject(fieldId, fieldValue, fieldType);
}
