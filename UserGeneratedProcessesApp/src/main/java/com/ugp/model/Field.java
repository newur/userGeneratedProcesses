package com.ugp.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Field {

	@Id
	@GeneratedValue
	private Long id;

	private String value;

	private String type;

}
