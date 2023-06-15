package com.wenabi.interview;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.wenabi.interview.controller.WishController;

@SpringBootTest
class InterviewApplicationTests {
	
	@Autowired 
	WishController wishController;
	
	@Test
	void countWishByStatus_nominal() {
		
		//given
		// save wishes if real project
		
		//when
		var count = wishController.countWishByStatus();	
		
		// then
		assertNotNull(count.getWhishCountByStatus());
		assertNotNull(count.getWhishCountByStatus().containsKey("APPLICATION"));
	}
	
	@Test
	void getAllWishConsultByStatus_nominal() {
		
		//given
		var totalCount = wishController.countWishByStatus().getWhishCountByStatus();	
		
		//when 		
		var statusWishList = new ArrayList<String>();
		statusWishList.add("APPLICATION");		
		var wishConsultByStatus = wishController.getAllWishConsultByStatus(statusWishList);
		
		//then		
		assertEquals(totalCount.get("APPLICATION"),wishConsultByStatus.size());
	}
}
