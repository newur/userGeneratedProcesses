var id = getParameterByName("id");

var request = getRequest(buildServerUrl() + "data/getProcessRequest/" + id);

function buildReceiveForm(objString) {
	var jsonObj = JSON.parse(objString)
	console.log("Object: " + objString);
	getEl("processName").value = jsonObj.process;

	var fields = jsonObj.requestObjects.fields;
	for (var i = 0; i < fields.length; i++) {
		var field = fields[i];
		switch (field.type) {
			case "Text" :
				buildReceiveFormRowWithInput(field.value, "...");
				break;
			case "Datum" :
				buildReceiveFormRowWithInput(field.value, "Here we need a calendar widget");
				break;
			case "Ganzzahl" :
				buildReceiveFormRowWithInput(field.value, "Here is an integer");
				break;
			case "Liste" :
				var fieldValueArray = field.value.split(";");
				buildReceiveFormRowWithDropdown(fieldValueArray.shift(), fieldValueArray);
				break;
			default:
				buildReceiveFormRowWithInput(field.value, "Undefinied field type");
				break;
		}
	}
}


waitForResponse(request, buildReceiveForm);
