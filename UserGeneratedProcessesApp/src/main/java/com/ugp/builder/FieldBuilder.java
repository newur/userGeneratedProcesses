package com.ugp.builder;

import com.ugp.model.Field;

public class FieldBuilder {

	private String id;
	private String type;
	private String value;

	public FieldBuilder() {
	}

	public FieldBuilder(String id, String type, String value) {
		this.id = id;
		this.type = type;
		this.value = value;
	}

	public FieldBuilder withIdTypeValue(String id, String type, String value) {
//		this.id = id;
		this.type = type;
		this.value = value;
		return this;
	}

	public FieldBuilder withId(String id) {
		this.id = id;
		return this;
	}

	public FieldBuilder withType(String type) {
		this.type = type;
		return this;
	}

	public FieldBuilder withValue(String value) {
		this.value = value;
		return this;
	}

	public Field build() {
		Field field = new Field();
//		field.setId(id);
		field.setType(type);
		field.setValue(value);

		return field;
	}
}
