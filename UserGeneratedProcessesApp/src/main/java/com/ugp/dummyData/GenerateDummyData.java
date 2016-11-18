package com.ugp.dummyData;

import com.ugp.builder.FieldBuilder;
import com.ugp.builder.ProcessRequestBuilder;
import com.ugp.model.Field;
import com.ugp.model.ProcessRequest;

public class GenerateDummyData {

	private FieldBuilder fieldBuilder;
	private ProcessRequestBuilder processRequestBuilder;

	public GenerateDummyData(String process) {
		fieldBuilder = new FieldBuilder();
		processRequestBuilder = new ProcessRequestBuilder(process);
	}

	public ProcessRequest buildProvideDummy() {
		processRequestBuilder.withRequestTarget("Personalabteilung");

		Field field = fieldBuilder
			.withId("1")
			.withType("Text")
			.withValue("Vorname").build();

		processRequestBuilder.withField(field);

		processRequestBuilder.withField(fieldBuilder.withIdTypeValue("2", "Text", "Nachname").build());
		processRequestBuilder.withField(fieldBuilder.withIdTypeValue("3", "Datum", "Geburtstag").build());
		return processRequestBuilder.build();
	}

}
