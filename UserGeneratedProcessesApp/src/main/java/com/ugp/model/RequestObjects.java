package com.ugp.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class RequestObjects {
	
	@Id
	@GeneratedValue
	private Long id;

	private String target;
	private String origin;
	
	@OneToOne
	private RequestObjects parent;
	
	@OneToOne
	private RequestObjects child;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Field> fields;

}
