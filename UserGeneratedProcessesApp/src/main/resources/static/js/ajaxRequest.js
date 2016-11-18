var url = "data/processRequest";

function getRequest(url) {
	var param = "";
	var request = ajaxGetRequest(url, param);
//	waitForResponse(request, printResponse);
	return request;
}

function ajaxGetRequest(url, param) {
	var req = new XMLHttpRequest();

	req.open("GET", url, true);
	req.setRequestHeader("Accept", "application/json");
	console.log("Do get request...");

	req.send();
	return req;
}

function collectInputDataOf(id) {
	var fields = getChildren(id);
	return parseHtmlFieldsToObjects(fields);
}

function collectInputDataAll() {
	var fieldObjects = collectInputDataOf("fields");
	var fieldsAndTarget = fieldsAndTargetObject(fieldObjects, 
			getInputValue("requestFrom"), getParameterByName("username"));
	var requestObj = requestObject(getInputValue("processName"), fieldsAndTarget);

	return requestObj;
}

function submitRequest() {
	var requestObject = collectInputDataAll();
	console.log(JSON.stringify(requestObject));

	var request = ajaxPostRequest(url, requestObject);
	waitForResponse(request, printResponse);
}

function waitForResponse(request, successFunc) {
	request.onreadystatechange = function () {

		if (request.readyState != 4) return; // Not there yet
		if (request.status != 200) {
			console.log("Failed");
			return;
		}
		// Request successful, read the response
		var resp = request.responseText;
		successFunc(resp);
	};
}

function printResponse(response) {
	console.log("Response: " + response);
}

function ajaxPostRequest(url, sendObject) {
	var req = new XMLHttpRequest();

	req.open("POST", url, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("Accept", "application/json");
	console.log("Do send...");

	req.send(JSON.stringify(sendObject));
	return req;
}
