console.log("Searching processes...");

var request = getRequest(buildServerUrl() + "process/requestAll");

function displayAllProcesses(objString) {
	console.log("Display all " + objString);
	var processes = JSON.parse(objString)
	
	var listElements = [];
	for (var i = 0; i < processes.length; i++) {
		var p = processes[i];
		var listEl = buildListElementLiWithLink(p.process, "receiveRequest.html?id=" + p.requestObjects.id);
		listElements.push(listEl);
	}
	var ulEl = getEl("processList");
	
	for (var i = 0; i < listElements.length; i++) {
		ulEl.appendChild(listElements[i]);		
	}
}


waitForResponse(request, displayAllProcesses);