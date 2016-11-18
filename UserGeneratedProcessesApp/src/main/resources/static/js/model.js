function fieldObject(fieldId, fieldValue, fieldType) {
	return {
//			id : fieldId,
		value: fieldValue,
		type: fieldType
	};
}

function requestObject(process, requestObjects, provideObjects) {
	return {
		process: process,
		requestObjects: requestObjects,
		provideObjects: provideObjects
	};
}

function fieldsAndTargetObject(fieldObjects, target, origin) {
	return {
		target: target,
		origin: origin,
		parent: null,
		child: null,
		fields: fieldObjects
	};
}
