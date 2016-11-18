var port;

self.addEventListener('push', function (event) {
	console.log("push service worker...");
	if (event.data == null) {
		var obj = {
			action: "subscribe",
			name: "foo"
		}
	} else {
		var obj = event.data.json();
		console.log("Obj: " + JSON.stringify(obj));
	}

	if (obj.action === 'subscribe' || obj.action === 'unsubscribe') {
		fireNotification(obj, event);
		port.postMessage(obj);
	} else if (obj.action === 'init' || obj.action === 'chatMsg') {
		port.postMessage(obj);
	}
});

self.onmessage = function (e) {
	console.log(e);
	port = e.ports[0];
}

function fireNotification(obj, event) {
	var title = 'Subscription change';
	var body = obj.name + ' has ' + obj.action + 'd.';
	var icon = 'push-icon.png';
	var tag = 'push';

	event.waitUntil(self.registration.showNotification(title, {
		body: body,
		icon: icon,
		tag: tag
	}));
}
