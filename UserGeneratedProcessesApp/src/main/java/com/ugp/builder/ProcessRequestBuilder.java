package com.ugp.builder;

import com.ugp.model.Field;
import com.ugp.model.ProcessRequest;
import com.ugp.model.RequestObjects;

import java.util.ArrayList;
import java.util.List;

public class ProcessRequestBuilder {

	private String process;
	private String requestTarget;
	private List<Field> fields;
	private RequestObjects provideObjects;
	private RequestObjects requestObjects;

	public ProcessRequestBuilder(String process) {
		this.process = process;
	}

	public ProcessRequestBuilder withRequestTarget(String target) {
		buildRequestObjectsIfNull();
		requestTarget = target;
		return this;
	}

	public ProcessRequestBuilder withField(Field field) {
		buildFieldsIfNull();
		fields.add(field);
		return this;
	}

	public ProcessRequest build() {
		ProcessRequest processRequest = new ProcessRequest();

		processRequest.setProcess(process);
		processRequest.setProvideObjects(provideObjects);
		processRequest.setRequestObjects(requestObjects);
		processRequest.getRequestObjects().setFields(fields);
		processRequest.getRequestObjects().setTarget(requestTarget);

		return processRequest;
	}

	private void buildRequestObjectsIfNull() {
		if (requestObjects == null) {
			requestObjects = new RequestObjects();
		}
	}

	private void buildFieldsIfNull() {
		if (fields == null) {
			fields = new ArrayList<Field>();
		}
	}

}
