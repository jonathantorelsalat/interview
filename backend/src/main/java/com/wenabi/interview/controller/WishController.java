package com.wenabi.interview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wenabi.interview.dtos.WishConsultDto;
import com.wenabi.interview.dtos.WishStatusDto;
import com.wenabi.interview.servicesApi.WishServiceApi;

@RequestMapping("/wishes")
@RestController
public class WishController {
	
	@Autowired
	WishServiceApi wishServiceApi;
	
    @GetMapping("/count/status")
    public WishStatusDto countWishByStatus() {
        return wishServiceApi.countWishByStatus();
    }    
    
    @GetMapping("/status")
    public List<WishConsultDto> getAllWishConsultByStatus(@RequestParam("status") List<String> statusList) {
        return wishServiceApi.getAllWishConsultByStatus(statusList);
    }
}
