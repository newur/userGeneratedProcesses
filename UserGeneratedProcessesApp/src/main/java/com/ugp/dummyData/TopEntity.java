package com.ugp.dummyData;

import javax.persistence.*;

@Entity
public class TopEntity {

	@Id
	@GeneratedValue
	private String id;

	@OneToOne(cascade = CascadeType.PERSIST)
	private ChildEntity child;

	private String name;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public ChildEntity getChild() {
		return child;
	}

	public void setChild(ChildEntity child) {
		this.child = child;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
