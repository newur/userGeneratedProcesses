package com.ugp.dummyData;

import javax.persistence.*;
import java.util.List;

@Entity
public class ChildEntity {

	@Id
	@GeneratedValue
	private String id;

	@OneToMany(cascade = CascadeType.PERSIST)
	List<ChildChildEntity> childList;

	private String name;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<ChildChildEntity> getChildList() {
		return childList;
	}

	public void setChildList(List<ChildChildEntity> childList) {
		this.childList = childList;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


}
