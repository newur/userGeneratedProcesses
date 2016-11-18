package com.ugp;

import org.junit.Test;

import com.ugp.model.RequestObjects;

public class RequestObjectsTest {
	
	@Test
	public void concatRequestObjects() {
		RequestObjects objects1 = new RequestObjects();
		RequestObjects objects2 = new RequestObjects();
		
		objects1.setTarget("i am one");
		objects2.setTarget("i am two");
		
		objects1.setParent(objects2);
		
		System.out.println(objects1.getParent().getTarget());
	}

}
