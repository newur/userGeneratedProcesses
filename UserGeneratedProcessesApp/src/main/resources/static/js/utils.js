var placeholder = ["Geburtstag", "Anrede", "Familienstand",
	"Mädchename der Mutter", "Schuhgröße"];

function buildServerUrl() {
	var serverUrl = "";
	var DEFAULT_SERVER_URL = "http://localhost:8082/";
	var currentUrl = window.location.href;
	
	if (currentUrl.indexOf("file:///") > -1) {
		serverUrl = DEFAULT_SERVER_URL;
	}
	return serverUrl;
}

function getChildren(id) {
	return getEl(id).children;
}

function removeElementViaIndex(array, index) {
	if (index > array.length - 1) {
		return array;
	}
	return array.splice(index, 1);
}

function randomPlaceholder() {
	var rand = Math.random() * (placeholder.length - 1);
	var randomInt = rand.toFixed(0);
	var randomPlaceholder = placeholder[randomInt];

	if (placeholder.length > 1) {
		removeElementViaIndex(placeholder, randomInt);
	}

	return randomPlaceholder;
}

function appendListElement(func, list, innerHtml) {
	list.appendChild(func(innerHtml));
}

function getEl(id) {
	return document.getElementById(id);
}

function addClickEvent(id, func) {
	getEl(id).addEventListener("click", func);
}

function getInputValue(id) {
	return getEl(id).value;
}

// http://stackoverflow.com/questions/19736663/appending-elements-to-dom-with-indentation-spacing
function indentedAppend(parent, child) {
	var indent = "",
		elem = parent;

	while (elem && elem !== document.body) {
		indent += "  ";
		elem = elem.parentNode;
	}

	if (parent.hasChildNodes() && parent.lastChild.nodeType === 3 && /^\s*[\r\n]\s*$/.test(parent.lastChild.textContent)) {
		parent.insertBefore(document.createTextNode("\n" + indent), parent.lastChild);
		parent.insertBefore(child, parent.lastChild);
	} else {
		parent.appendChild(document.createTextNode("\n" + indent));
		parent.appendChild(child);
		parent.appendChild(document.createTextNode("\n" + indent.slice(0, -2)));
	}

}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    
    console.log(url);

    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
