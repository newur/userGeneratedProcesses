package com.ugp.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class ProcessRequest {

	@Id
	@GeneratedValue
	private Long id;

	private String process;

	@OneToOne(cascade = CascadeType.ALL)
	private RequestObjects requestObjects;

	@OneToOne(cascade = CascadeType.ALL)
	private RequestObjects provideObjects;

}
